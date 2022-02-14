using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

using PasswordGenerator;

using CatenaX.NetworkServices.Mailing.SendMail;
using CatenaX.NetworkServices.Provisioning.Library;
using CatenaX.NetworkServices.Provisioning.Library.Models;

namespace CatenaX.NetworkServices.Provisioning.Service.BusinessLogic
{
    public class InvitationBusinessLogic : IInvitationBusinessLogic
    {
        private readonly IProvisioningManager _provisioningManager;
        private readonly IMailingService _mailingService;
        private readonly IConfiguration _configuration;

        public InvitationBusinessLogic(IProvisioningManager provisioningManager, IMailingService mailingService, IConfiguration configuration)
        {
            _provisioningManager = provisioningManager;
            _mailingService = mailingService;
            _configuration = configuration;
        }

        public async Task<bool> ExecuteInvitation(InvitationData invitationData)
        {
            var idpName = await _provisioningManager.SetupSharedIdpAsync(invitationData.organisationName).ConfigureAwait(false);
            if (idpName == null) return false;

            var password = new Password().Next();
            var centralUserId = await _provisioningManager.CreateSharedUserLinkedToCentralAsync(idpName, new UserProfile {
                    UserName = invitationData.userName,
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
                { "url", $"{_configuration.GetValue<string>("BasePortalAddress")}/?company={idpName}&user={invitationData.userName}"  }
            };

            await _mailingService.SendMails(invitationData.email, mailParameters, new List<string> { "invite", "password"} );
            return true;
        }
    }
}
