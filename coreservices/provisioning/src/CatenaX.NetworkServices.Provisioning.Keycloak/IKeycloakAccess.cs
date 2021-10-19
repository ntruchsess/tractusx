using System.Threading.Tasks;
using System.Collections.Generic;
using Keycloak.Net.Models.RealmsAdmin;
using Keycloak.Net.Models.Groups;
using Keycloak.Net.Models.Users;

namespace CatenaX.NetworkServices.Provisioning.Keycloak
{
    public interface IKeycloakAccess
    {
        Task<IEnumerable<Realm>> GetRealms();
        Task<Group> GetGroup(string realmId, string groupName);
        Task<IEnumerable<User>> GetUsers(string realmId);
        Task<bool> DeleteGroup(string realmId, string groupId);
        Task<IEnumerable<(Realm,Group)>> GetOnboardingRealmGroupsAsync();
    }
}