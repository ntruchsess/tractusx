using Keycloak.Net;
using Keycloak.Net.Models.Groups;
using Keycloak.Net.Models.RealmsAdmin;
using Keycloak.Net.Models.Users;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Provisioning.Keycloak
{
    public class KeycloakAccess:IKeycloakAccess
    {
        public static readonly string ONBOARDING = "Onboarding";
        readonly KeycloakClient _Client;
        readonly string _AdminRealm;
        public KeycloakAccess(IKeycloakFactory keycloakFactory)
        {
            _Client = keycloakFactory.CreateKeycloakClient();
            _AdminRealm = keycloakFactory.GetAdminRealm();
        }
        public Task<bool> DeleteGroup(string realmId, string groupId)
        {
            return _Client.DeleteGroupAsync(realmId,groupId);
        }
        public Task<Group> GetGroup(string realmId, string groupName)
        {
            return _Client.GetGroupHierarchyAsync(realmId).ContinueWith(taskGroups =>
                taskGroups.Result.FirstOrDefault( group => group.Name == groupName ));
        }
        public Task<IEnumerable<(Realm,Group)>> GetOnboardingRealmGroupsAsync()
        {
            return GetRealms()
                .ContinueWith(taskRealms => {
                    var selectTasks = taskRealms.Result.Select(realm => 
                        GetGroup(realm.Id,ONBOARDING)
                            .ContinueWith(taskGroup =>
                                (realm,taskGroup.Result)
                            )
                    );
                    Task.WhenAny(selectTasks).Wait();
                    return selectTasks.Select(task =>
                        task.Result
                    ).Where(result =>
                        result.Item2 != null
                    );
                });
        }

        public Task<IEnumerable<User>> GetUsers(string realmId)
        {
            return _Client.GetUsersAsync(realmId);
        }

        public Task<IEnumerable<Realm>> GetRealms()
        {
            return _Client.GetRealmsAsync(_AdminRealm);
        }
    }
}
