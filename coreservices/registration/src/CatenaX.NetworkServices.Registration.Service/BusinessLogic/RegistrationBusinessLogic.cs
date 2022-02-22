using CatenaX.NetworkServices.Cosent.Library.Data;
using CatenaX.NetworkServices.Mailing.SendMail;
using CatenaX.NetworkServices.Mockups;
using CatenaX.NetworkServices.Provisioning.Library;
using CatenaX.NetworkServices.Provisioning.Library.Models;
using CatenaX.NetworkServices.Registration.Service.BPN;
using CatenaX.NetworkServices.Registration.Service.BPN.Model;
using CatenaX.NetworkServices.Registration.Service.Custodian;
using CatenaX.NetworkServices.Registration.Service.Model;
using CatenaX.NetworkServices.Registration.Service.RegistrationAccess;

using Keycloak.Net;
using Keycloak.Net.Models.Users;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using PasswordGenerator;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Registration.Service.BusinessLogic
{
    public class RegistrationBusinessLogic : IRegistrationBusinessLogic
    {
        private readonly RegistrationSettings _settings;
        private readonly IRegistrationDBAccess _dbAccess;
        private readonly IMailingService _mailingService;
        private readonly IBPNAccess _bpnAccess;
        private readonly ICustodianService _custodianService;
        private readonly IProvisioningManager _provisioningManager;

        public RegistrationBusinessLogic(IOptions<RegistrationSettings> settings, IRegistrationDBAccess registrationDBAccess, IMailingService mailingService, IBPNAccess bpnAccess, ICustodianService custodianService, IProvisioningManager provisioningManager)
        {
            _settings = settings.Value;
            _dbAccess = registrationDBAccess;
            _mailingService = mailingService;
            _bpnAccess = bpnAccess;
            _custodianService = custodianService;
            _provisioningManager = provisioningManager;
        }

        public async Task<bool> CreateUsersAsync(List<UserCreationInfo> usersToCreate, string tenant, string organisation, string createdByEmail, string createdByName)
        {
            var idpName = tenant;
            var organisationName = organisation;
            var clientId = _settings.KeyCloakClientID;
            var pwd = new Password();
            foreach (UserCreationInfo user in usersToCreate)
            {
                var password = pwd.Next();
                var centralUserId = await _provisioningManager.CreateSharedUserLinkedToCentralAsync(idpName, new UserProfile {
                    UserName = user.userName ?? user.eMail,
                    FirstName = user.firstName,
                    LastName = user.lastName,
                    Email = user.eMail,
                    Password = password
                }, organisationName).ConfigureAwait(false);

                if (centralUserId == null) return false;

                var clientRoleNames = new Dictionary<string, IEnumerable<string>>
                {
                    { clientId, new []{user.Role}}
                };

                if (!await _provisioningManager.AssignClientRolesToCentralUserAsync(centralUserId, clientRoleNames).ConfigureAwait(false)) return false;

                var inviteTemplateName = "invite";
                if (!string.IsNullOrWhiteSpace(user.Message))
                { 
                    inviteTemplateName = "inviteWithMessage";
                }

                var mailParameters = new Dictionary<string, string>
                {
                    { "password", password },
                    { "companyname", organisationName },
                    { "message", user.Message },
                    { "eMailPreferredUsernameCreatedBy", createdByEmail },
                    { "nameCreatedBy", createdByName ?? createdByEmail},
                    { "url", $"{_settings.BasePortalAddress}"},
                    { "username", user.eMail},
                    
                };

                await _mailingService.SendMails(user.eMail, mailParameters, new List<string> { inviteTemplateName, "password" }).ConfigureAwait(false);
            }
            return true;
        }

        public Task<List<string>> GetAvailableUserRoleAsync() =>
            Task.FromResult(UserRoles.Roles);

        public Task<IEnumerable<string>> GetClientRolesCompositeAsync() =>
            _provisioningManager.GetClientRolesCompositeAsync(_settings.KeyCloakClientID);

        public Task<List<FetchBusinessPartnerDto>> GetCompanyByIdentifierAsync(string companyIdentifier) =>
            _bpnAccess.FetchBusinessPartner(companyIdentifier);

        public Task<IEnumerable<CompanyRole>> GetCompanyRolesAsync() =>
            _dbAccess.GetAllCompanyRoles();

        public Task<IEnumerable<ConsentForCompanyRole>> GetConsentForCompanyRoleAsync(int roleId) =>
            _dbAccess.GetConsentForCompanyRole(roleId);

        public Task SetCompanyRolesAsync(CompanyToRoles rolesToSet) =>
            _dbAccess.SetCompanyRoles(rolesToSet);

        public Task SetIdpAsync(SetIdp idpToSet) =>
            _dbAccess.SetIdp(idpToSet);

        public Task SignConsentAsync(SignConsentRequest signedConsent) =>
            _dbAccess.SignConsent(signedConsent);

        public Task<IEnumerable<SignedConsent>> SignedConsentsByCompanyIdAsync(string companyId) =>
            _dbAccess.SignedConsentsByCompanyId(companyId);

        public Task CreateCustodianWalletAsync(WalletInformation information) =>
            _custodianService.CreateWallet(information.bpn, information.name);
    }
}
