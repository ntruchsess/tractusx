using CatenaX.NetworkServices.Cosent.Library.Data;
using CatenaX.NetworkServices.Invitation.Identity;
using CatenaX.NetworkServices.Invitation.Identity.Identity;
using CatenaX.NetworkServices.Invitation.Identity.Model;
using CatenaX.NetworkServices.Mockups;
using CatenaX.NetworkServices.Onboarding.Service.Model;
using CatenaX.NetworkServices.Onboarding.Service.OnboardingAccess;

using Keycloak.Net;

using Microsoft.Extensions.Configuration;

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Onboarding.Service.BusinessLogic
{
    public class OnboardingBusinessLogic : IOnboardingBusinessLogic
    {
        private readonly IConfiguration _configuration;
        private readonly IOnboardingDBAccess _dbAccess;

        public OnboardingBusinessLogic(IConfiguration configuration, IOnboardingDBAccess onboardingDBAccess)
        {
            _configuration = configuration;
            _dbAccess = onboardingDBAccess;
        }

        public async Task CreateUsers(List<User> userList, string realm, string token)
        {
            var manager = new KeycloakIdentityManager(new KeycloakClient(_configuration.GetValue<string>("KeyCloakConnectionString"), () => token));
            foreach (User user in userList)
            {
                var newUser = new CreateUser
                {
                    UserName = user.eMail,
                    Email = user.eMail,
                    Groups = new List<string> { user.Role }
                };

                var password = await manager.CreateUser(realm, newUser);
            }
        }

        public Task<List<string>> GetAvailableUserRole()
        {
            return Task.FromResult(UserRoles.Roles);
        }

        public Task<Company> GetCompanyByOneId(string oneId)
        {
            var query = new QueryCompany();
            return Task.FromResult(query.Query(oneId));
        }

        public async Task<List<CompanyRole>> GetCompanyRoles()
        {
            var result = await _dbAccess.GetAllCompanyRoles();
            return result.ToList();
        }

        public async Task<List<ConsentForCompanyRole>> GetConsentForCompanyRole(int roleId)
        {
            return (await _dbAccess.GetConsentForCompanyRole(roleId)).ToList();
        }

        public async Task SetCompanyRoles(CompanyToRoles rolesToSet)
        {
            await _dbAccess.SetCompanyRoles(rolesToSet);
        }

        public async Task SignConsent(SignConsentRequest signedConsent )
        {
            await _dbAccess.SignConsent(signedConsent);
        }

        public async Task<List<SignedConsent>> SignedConsentsByCompanyId(string companyId)
        {
           return (await _dbAccess.SignedConsentsByCompanyId(companyId)).ToList();
        }
    }
}
