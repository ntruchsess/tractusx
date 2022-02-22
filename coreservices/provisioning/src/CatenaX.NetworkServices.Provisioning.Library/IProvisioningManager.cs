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
        Task<IEnumerable<string>> GetUserClientRoleMappingsCompositeAsync(string userId, string clientId);
        public Task<string> GetOrganisationFromCentralIdentityProviderMapperAsync(string alias);
    }
}
