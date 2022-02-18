using CatenaX.NetworkServices.Cosent.Library.Data;
using CatenaX.NetworkServices.Mailing.SendMail;
using CatenaX.NetworkServices.Mockups;
using CatenaX.NetworkServices.Provisioning.Library;
using CatenaX.NetworkServices.Registration.Service.BPN;
using CatenaX.NetworkServices.Registration.Service.BPN.Model;
using CatenaX.NetworkServices.Registration.Service.Custodian;
using CatenaX.NetworkServices.Registration.Service.Model;
using CatenaX.NetworkServices.Registration.Service.RegistrationAccess;

using Keycloak.Net;
using Keycloak.Net.Models.Users;
using Microsoft.Extensions.Configuration;
using PasswordGenerator;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Registration.Service.BusinessLogic
{
    public class RegistrationBusinessLogic : IRegistrationBusinessLogic
    {
        private readonly IConfiguration _configuration;
        private readonly IRegistrationDBAccess _dbAccess;
        private readonly IMailingService _mailingService;
        private readonly IBPNAccess _bpnAccess;
        private readonly ICustodianService _custodianService;
        private readonly IProvisioningManager _provisioningManager;

        public RegistrationBusinessLogic(IConfiguration configuration, IRegistrationDBAccess registrationDBAccess, IMailingService mailingService, IBPNAccess bpnAccess, ICustodianService custodianService, IProvisioningManager provisioningManager)
        {
            _configuration = configuration;
            _dbAccess = registrationDBAccess;
            _mailingService = mailingService;
            _bpnAccess = bpnAccess;
            _custodianService = custodianService;
            _provisioningManager = provisioningManager;
        }

        public async Task CreateUsersAsync(List<UserCreationInfo> userList, string realm, string token, Dictionary<string, string> userInfo)
        {
            var client = new KeycloakClient(_configuration.GetValue<string>("KeyCloakConnectionString"), () => token);
            var clientId = _configuration.GetValue<string>("KeyCloakClientID");
            var pwd = new Password();
            foreach (UserCreationInfo user in userList)
            {
                var password = pwd.Next();
                var userToCreate = new User
                {
                    UserName = user.eMail,
                    FirstName = user.firstName,
                    LastName = user.lastName,
                    Credentials = new List<Credentials>() { new Credentials { Type = "Password", Value = password } },
                    Enabled = true
                };

                var userId = await client.CreateAndRetrieveUserIdAsync(realm, userToCreate).ConfigureAwait(false);
                var roles = new [] {await client.GetRoleByNameAsync(realm, clientId, user.Role).ConfigureAwait(false)};

                await client.AddClientRoleMappingsToUserAsync(realm, userId, clientId, roles).ConfigureAwait(false);

                var inviteTemplateName = "invite";
                if (!string.IsNullOrWhiteSpace(user.Message))
                { 
                    inviteTemplateName = "inviteWithMessage";
                }

                var mailParameters = new Dictionary<string, string>
                {
                    { "password", password },
                    { "companyname", realm },
                    { "message", user.Message },
                    { "eMailPreferredUsernameCreatedBy", userInfo["preferred_username"] },
                    { "nameCreatedBy", userInfo.GetValueOrDefault("name") ?? userInfo["preferred_username"]},
                    { "url", $"{_configuration.GetValue<string>("BasePortalAddress")}/?company={realm}"},
                    { "username", user.eMail},
                    
                };

                await _mailingService.SendMails(user.eMail, mailParameters, new List<string> { inviteTemplateName, "password" }).ConfigureAwait(false);
            }
        }

        public Task<List<string>> GetAvailableUserRoleAsync() =>
            Task.FromResult(UserRoles.Roles);

        public Task<IEnumerable<string>> GetClientRolesCompositeAsync(string clientId) =>
            _provisioningManager.GetClientRolesCompositeAsync(clientId);

        public Task<IEnumerable<string>> GetUserClientRoleMappingsCompositeAsync(string userId, string clientId) =>
            _provisioningManager.GetUserClientRoleMappingsCompositeAsync(userId,clientId);

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
