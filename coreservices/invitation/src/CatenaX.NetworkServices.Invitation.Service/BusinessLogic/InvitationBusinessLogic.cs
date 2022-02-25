using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

using PasswordGenerator;

using CatenaX.NetworkServices.Mailing.SendMail;
using CatenaX.NetworkServices.Provisioning.Library;
using CatenaX.NetworkServices.Provisioning.Library.Models;
using Microsoft.Extensions.Logging;
using System;
using Microsoft.Extensions.Options;

namespace CatenaX.NetworkServices.Invitation.Service.BusinessLogic
{
    public class InvitationBusinessLogic : IInvitationBusinessLogic
    {
        private readonly IProvisioningManager _provisioningManager;
        private readonly IMailingService _mailingService;
        private readonly ILogger<InvitationBusinessLogic> _logger;
        private readonly IOptions<InvitationSettings> _settings;

        public InvitationBusinessLogic(
            IProvisioningManager provisioningManager,
            IMailingService mailingService,
            ILogger<InvitationBusinessLogic> logger,
            IOptions<InvitationSettings> settings)
        {
            _provisioningManager = provisioningManager;
            _mailingService = mailingService;
            _logger = logger;
            _settings = settings;
        }

        public async Task<bool> ExecuteInvitation(InvitationData invitationData)
        {
            var idpName = await _provisioningManager.SetupSharedIdpAsync(invitationData.organisationName).ConfigureAwait(false);
            if (idpName == null) return false;

            var password = new Password().Next();
            var centralUserId = await _provisioningManager.CreateSharedUserLinkedToCentralAsync(idpName, new UserProfile {
                    UserName = invitationData.userName ?? invitationData.email,
                    FirstName = invitationData.firstName,
                    LastName = invitationData.lastName,
                    Email = invitationData.email,
                    Password = password
                }, invitationData.organisationName).ConfigureAwait(false);

            if (centralUserId == null) return false;

            if (!await _provisioningManager.AssignInvitedUserInitialRoles(centralUserId).ConfigureAwait(false)) return false;

            var mailParameters = new Dictionary<string, string>
            {
                { "password", password },
                { "companyname", invitationData.organisationName },
                { "url", $"{_settings.Value.RegistrationBasePortalAddress}"},
            };

            await _mailingService.SendMails(invitationData.email, mailParameters, new List<string> { "RegistrationTemplate", "PasswordForRegistrationTemplate"} );
            return true;
        }

        public async Task<IEnumerable<string>> CreateUsersAsync(IEnumerable<UserCreationInfo> usersToCreate, string tenant, string createdByEmail, string createdByName)
        {
            var idpName = tenant;
            var organisationName = await _provisioningManager.GetOrganisationFromCentralIdentityProviderMapperAsync(idpName).ConfigureAwait(false);
            var clientId = _settings.Value.Portal.KeyCloakClientID;
            var pwd = new Password();
            List<string> userList = new List<string>();
            foreach (UserCreationInfo user in usersToCreate)
            {
                try
                {
                    var password = pwd.Next();
                    var centralUserId = await _provisioningManager.CreateSharedUserLinkedToCentralAsync(idpName, new UserProfile {
                        UserName = user.userName ?? user.eMail,
                        FirstName = user.firstName,
                        LastName = user.lastName,
                        Email = user.eMail,
                        Password = password
                    }, organisationName).ConfigureAwait(false);

                    if (centralUserId == null) continue;

                    var clientRoleNames = new Dictionary<string, IEnumerable<string>>
                    {
                        { clientId, new []{user.Role}}
                    };

                    if (!await _provisioningManager.AssignClientRolesToCentralUserAsync(centralUserId, clientRoleNames).ConfigureAwait(false)) continue;

                    var inviteTemplateName = "PortalTemplate";
                    if (!string.IsNullOrWhiteSpace(user.Message))
                    { 
                        inviteTemplateName = "PortalTemplateWithMessage";
                    }

                    var mailParameters = new Dictionary<string, string>
                    {
                        { "password", password },
                        { "companyname", organisationName },
                        { "message", user.Message },
                        { "eMailPreferredUsernameCreatedBy", createdByEmail },
                        { "nameCreatedBy", createdByName ?? createdByEmail},
                        { "url", $"{_settings.Value.Portal.BasePortalAddress}"},
                        { "username", user.eMail},
                    
                    };

                    await _mailingService.SendMails(user.eMail, mailParameters, new List<string> { inviteTemplateName, "PasswordForPortalTemplate" }).ConfigureAwait(false);

                    userList.Add(user.eMail);
                }
                catch (Exception e)
                {
                    _logger.LogError(e, "Error while creating user");
                }
            }
            return userList;
        }
    }
}
