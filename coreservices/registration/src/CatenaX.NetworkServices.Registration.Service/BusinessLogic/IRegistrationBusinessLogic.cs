using CatenaX.NetworkServices.Cosent.Library.Data;
using CatenaX.NetworkServices.Mockups;
using CatenaX.NetworkServices.Registration.Service.BPN.Model;
using CatenaX.NetworkServices.Registration.Service.Model;

using System.Collections.Generic;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Registration.Service.BusinessLogic
{
    public interface IRegistrationBusinessLogic
    {
        Task<List<FetchBusinessPartnerDto>> GetCompanyByIdentifierAsync(string companyIdentifier);
        Task<List<string>> GetAvailableUserRoleAsync();
        Task<IEnumerable<string>> GetClientRolesCompositeAsync(string clientId);
        Task<IEnumerable<string>> GetUserClientRoleMappingsCompositeAsync(string userId, string clientId);
        Task<IEnumerable<CompanyRole>> GetCompanyRolesAsync();
        Task CreateUsersAsync(List<UserCreationInfo> userList, string realm, string token, Dictionary<string, string> userInfo);
        Task SetCompanyRolesAsync(CompanyToRoles rolesToSet);
        Task<IEnumerable<ConsentForCompanyRole>> GetConsentForCompanyRoleAsync(int roleId);
        Task SignConsentAsync(SignConsentRequest signedConsent);
        Task<IEnumerable<SignedConsent>> SignedConsentsByCompanyIdAsync(string companyId);
        Task SetIdpAsync(SetIdp idpToSet);
        Task CreateCustodianWalletAsync(WalletInformation information);
    }
}
