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
        public const string ConfigPosition = "KeyCloak";

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
            return _Client.GetGroupHierarchyAsync(realmId,null,null,groupName).ContinueWith(taskGroups =>
                taskGroups.IsCompletedSuccessfully ?
                    taskGroups.Result.FirstOrDefault( group => group.Name == groupName ) : null);
        }
        public Task<IEnumerable<(Realm,Group)>> GetOnboardingRealmGroupsAsync(string triggerGroup)
        {
            return GetRealms()
                .ContinueWith(taskRealms => {
                    if (taskRealms.IsCompletedSuccessfully) {
                        var selectTasks = taskRealms.Result.Select(realm =>
                            GetGroup(realm.Id,triggerGroup)
                                .ContinueWith(taskGroup =>
                                    (realm,taskGroup.Result)
                                )
                        );
                        Task.WhenAll(selectTasks).Wait();
                        return selectTasks.Select(task =>
                            task.Result
                        ).Where(result =>
                            result.Item2 != null
                        );
                    } else {
                        return null;
                    }
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
        public Task<string> GetClientAttributeAsync(string realm, string clientId, string attribute)
        {
            return _Client.GetClientsAsync(realm,clientId).ContinueWith(taskClients => {
                if (taskClients.IsCompletedSuccessfully) {
                    var client = taskClients.Result.FirstOrDefault(client =>
                        client.ClientId == clientId);
                    return (string)(client == null ? null : client.Attributes[attribute]);
                } else {
                    return null;
                }
            });
        }
    }
}
