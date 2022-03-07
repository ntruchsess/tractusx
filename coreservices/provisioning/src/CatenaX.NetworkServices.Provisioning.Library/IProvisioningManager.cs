using System.Collections.Generic;
using System.Threading.Tasks;
using CatenaX.NetworkServices.Provisioning.Library.Models;

namespace CatenaX.NetworkServices.Provisioning.Library
{
    public interface IProvisioningManager
    {
        Task<string> SetupSharedIdpAsync(string organisationName);
        Task<string> CreateSharedUserLinkedToCentralAsync(string idpName, UserProfile userProfile, string companyName);
        Task<bool> AssignInvitedUserInitialRoles(string centralUserId);
        Task<bool> AssignClientRolesToCentralUserAsync(string centralUserId, IDictionary<string,IEnumerable<string>> clientRoleNames);
        Task<IEnumerable<string>> GetClientRolesCompositeAsync(string clientId);
        Task<string> GetOrganisationFromCentralIdentityProviderMapperAsync(string alias);
        Task<string> SetupOwnIdpAsync(string organisationName, string clientId, string metadataUrl, string clientAuthMethod, string clientSecret);
        Task<IEnumerable<UserInfo>> GetUsersFromSharedAsync(string idpName);
        Task<string> GetProviderUserNameForCentralUserIdAsync(string userId);
        Task<bool> DeleteSharedAndCentralUserAsync(string idpName, string userName);
    }
}
