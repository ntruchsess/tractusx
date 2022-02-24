using CatenaX.NetworkServices.Cosent.Library.Data;
using CatenaX.NetworkServices.Invitation.Identity;
using CatenaX.NetworkServices.Invitation.Identity.Identity;
using CatenaX.NetworkServices.Invitation.Identity.Model;
using CatenaX.NetworkServices.Mailing.SendMail;
using CatenaX.NetworkServices.Mockups;
using CatenaX.NetworkServices.Registration.Service.BPN;
using CatenaX.NetworkServices.Registration.Service.BPN.Model;
using CatenaX.NetworkServices.Registration.Service.Custodian;
using CatenaX.NetworkServices.Registration.Service.Model;
using CatenaX.NetworkServices.Registration.Service.RegistrationAccess;

using Keycloak.Net;
using Keycloak.Net.Models.Roles;
using Keycloak.Net.Models.Users;

using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using PasswordGenerator;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
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

        public RegistrationBusinessLogic(IConfiguration configuration, IRegistrationDBAccess registrationDBAccess, IMailingService mailingService, IBPNAccess bpnAccess, ICustodianService custodianService)
        {
            _configuration = configuration;
            _dbAccess = registrationDBAccess;
            _mailingService = mailingService;
            _bpnAccess = bpnAccess;
            _custodianService = custodianService;
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

        public async Task FinishRegistrationAsync(string token, string realm)
        {
            var manager = new KeycloakIdentityManager(new KeycloakClient(_configuration.GetValue<string>("KeyCloakConnectionString"), () => token),"");
            var group = new CreateGroup { Name = "Registration" };
            await manager.CreateGroup(realm, group);
        }

        public Task<List<string>> GetAvailableUserRoleAsync()
        {
            return Task.FromResult(UserRoles.Roles);
        }

        public async Task<List<string>> GetClientRolesCompositeAsync(string token, string realm, string clientId)
        {
            var client = new KeycloakClient(_configuration.GetValue<string>("KeyCloakConnectionString"), () => token);
            var clientRoles = await client.GetRolesAsync(realm, clientId);

            return clientRoles.Where(r => r.Composite == true).Select(g => g.Name).ToList();
        }

        public async Task<List<string>> GetUserClientRoleMappingsCompositeAsync(string token, string realm, string userId, string clientId)
        {
            var client = new KeycloakClient(_configuration.GetValue<string>("KeyCloakConnectionString"), () => token);
            var clientRoleMappingsComposite = await client.GetClientRoleMappingsForUserAsync(realm, userId, clientId);

            return clientRoleMappingsComposite.Where(r => r.Composite == true).Select(g => g.Name).ToList();
        }

        public async Task<List<string>> GetGroupsAsync(string token, string realm)
        {
            var client = new KeycloakClient(_configuration.GetValue<string>("KeyCloakConnectionString"), () => token);
            var userGroups = await client.GetGroupHierarchyAsync(realm);

            return userGroups.Select(g => g.Name).ToList();
        }

        public async Task<List<string>> GetUserGroupsAsync(string token, string realm, string userId)
        {
            var client = new KeycloakClient(_configuration.GetValue<string>("KeyCloakConnectionString"), () => token);
            var userGroups = await client.GetUserGroupsAsync(realm, userId);

            return userGroups.Select(g => g.Name).ToList();
        }

        public async Task<List<FetchBusinessPartnerDto>> GetCompanyByIdentifierAsync(string companyIdentifier)
        {
            return await _bpnAccess.FetchBusinessPartner(companyIdentifier);
        }

        public async Task<List<CompanyRole>> GetCompanyRolesAsync()
        {
            var result = await _dbAccess.GetAllCompanyRoles();
            return result.ToList();
        }

        public async Task<List<ConsentForCompanyRole>> GetConsentForCompanyRoleAsync(int roleId)
        {
            return (await _dbAccess.GetConsentForCompanyRole(roleId)).ToList();
        }

        public async Task SetCompanyRolesAsync(CompanyToRoles rolesToSet)
        {
            await _dbAccess.SetCompanyRoles(rolesToSet);
        }

        public async Task SetIdpAsync(SetIdp idpToSet)
        {
            await _dbAccess.SetIdp(idpToSet);
        }

        public async Task SignConsentAsync(SignConsentRequest signedConsent )
        {
            await _dbAccess.SignConsent(signedConsent);
        }

        public async Task<List<SignedConsent>> SignedConsentsByCompanyIdAsync(string companyId)
        {
           return (await _dbAccess.SignedConsentsByCompanyId(companyId)).ToList();
        }

        public async Task CreateCustodianWalletAsync(WalletInformation information)
        {
            await _custodianService.CreateWallet(information.bpn, information.name);
        }

        public async Task CreateDocument(IFormFile document, string userName)
        {
            var name = document.FileName;
            var documentContent = "";
            var hash = "";
            using (var ms = new MemoryStream())
            {
                document.CopyTo(ms);
                var fileBytes = ms.ToArray();
                documentContent = Convert.ToBase64String(fileBytes);
                using (SHA256 mySHA256 = SHA256.Create())
                {
                    byte[] hashValue = mySHA256.ComputeHash(Encoding.UTF8.GetBytes(documentContent));
                    hash = Encoding.UTF8.GetString(hashValue); 
                    StringBuilder builder = new StringBuilder();
                    for (int i = 0; i < hashValue.Length; i++)
                    {
                        builder.Append(hashValue[i].ToString("x2"));
                    }
                    hash = builder.ToString();
                }
            }
            await _dbAccess.UploadDocument(name,documentContent,hash,userName);
        }
    }
}
