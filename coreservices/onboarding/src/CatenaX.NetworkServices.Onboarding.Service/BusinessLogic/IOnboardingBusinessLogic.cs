using CatenaX.NetworkServices.Cosent.Library.Data;
using CatenaX.NetworkServices.Mockups;
using CatenaX.NetworkServices.Onboarding.Service.Model;

using System.Collections.Generic;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Onboarding.Service.BusinessLogic
{
    public interface IOnboardingBusinessLogic
    {
        Task<Company> GetCompanyByOneIdAsync(string oneId);
        Task<List<string>> GetAvailableUserRoleAsync();
        Task<List<CompanyRole>> GetCompanyRolesAsync();
        Task CreateUsersAsync(List<User> userList, string realm, string token);
        Task SetCompanyRolesAsync(CompanyToRoles rolesToSet);
        Task<List<ConsentForCompanyRole>> GetConsentForCompanyRoleAsync(int roleId);
        Task SignConsentAsync(SignConsentRequest signedConsent);
        Task<List<SignedConsent>> SignedConsentsByCompanyIdAsync(string companyId);
        Task SetIdpAsync(SetIdp idpToSet);
        Task FinishOnboardingAsync(string token, string realm);
    }
}
