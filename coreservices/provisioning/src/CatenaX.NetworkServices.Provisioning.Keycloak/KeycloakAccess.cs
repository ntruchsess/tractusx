using Keycloak.Net;
using Keycloak.Net.Models.Groups;
using Keycloak.Net.Models.RealmsAdmin;
using Keycloak.Net.Models.Users;
using Microsoft.Extensions.Options;
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Xml.Serialization;

using CatenaX.NetworkServices.Provisioning.Keycloak.Models;
using CatenaX.NetworkServices.Provisioning.Utils;

namespace CatenaX.NetworkServices.Provisioning.Keycloak
{
    public class KeycloakAccess:IKeycloakAccess
    {
        public const string ConfigPosition = "KeyCloak";

        readonly KeycloakClient _Client;
        readonly HttpClient _HttpClient;
        readonly string _AdminRealm;
        readonly StringTemplate _MetaDataTemplate;
        public KeycloakAccess(IKeycloakFactory keycloakFactory, IHttpClientFactory httpClientFactory, IOptions<KeycloakAccessSettings> settings)
        {
            _Client = keycloakFactory.CreateKeycloakClient();
            _HttpClient = httpClientFactory.CreateClient();
            _AdminRealm = keycloakFactory.GetAdminRealm();
             _MetaDataTemplate = new StringTemplate(keycloakFactory.GetConnectionString()+settings.Value.MetaDataPath);
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
        public async Task<string> GetSamlDescriptorCert(string realm)
        {
            var parameters = new Dictionary<string,string> {
                { "realm", realm }
            };
            var request = new HttpRequestMessage(HttpMethod.Get, new Uri(_MetaDataTemplate.Apply(parameters)));
            request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/xml"));

            var response = await _HttpClient.SendAsync(request);
            response.EnsureSuccessStatusCode();

            var responseStream = await response.Content.ReadAsStreamAsync();
            XmlSerializer x = new XmlSerializer(typeof(EntityDescriptor));
            var descriptor = (EntityDescriptor) x.Deserialize(responseStream);
            return descriptor.IDPSSODescriptor.KeyDescriptor.KeyInfo.X509Data.X509Certificate;
        }
    }
}
