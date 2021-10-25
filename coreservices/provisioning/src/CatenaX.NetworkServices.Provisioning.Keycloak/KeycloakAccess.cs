using Keycloak.Net;
using Keycloak.Net.Models.Groups;
using Keycloak.Net.Models.RealmsAdmin;
using Keycloak.Net.Models.Users;
using Microsoft.Extensions.Options;
using System;
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
        public Task<bool> DeleteGroupAsync(string realmId, string groupId)
        {
            return _Client.DeleteGroupAsync(realmId,groupId);
        }
        public Task<Group> GetGroupAsync(string realmId, string groupName)
        {
            return _Client.GetGroupHierarchyAsync(realmId,null,null,groupName).ContinueWith(taskGroups =>
                taskGroups.IsCompletedSuccessfully ?
                    taskGroups.Result.FirstOrDefault( group => group.Name == groupName ) : null);
        }
        public Task<IEnumerable<(Realm,Group)>> GetOnboardingRealmGroupsAsync(string triggerGroup)
        {
            return GetRealmsAsync()
                .ContinueWith(taskGetRealms =>
                    Task.WhenAll(taskGetRealms.Result.Select(realm =>
                        GetGroupAsync(realm._Realm,triggerGroup)
                            .ContinueWith(taskGetGroup => (realm,taskGetGroup.Result))))
                    .ContinueWith(taskWhenAll =>
                        taskWhenAll.Result.Where(x => x.Item2 != null))).Unwrap();
        }
        public Task<IEnumerable<User>> GetUsersAsync(string realmId)
        {
            return _Client.GetUsersAsync(realmId);
        }
        public Task<IEnumerable<Realm>> GetRealmsAsync()
        {
            return _Client.GetRealmsAsync(_AdminRealm);
        }
        public Task<string> GetSamlDescriptorCertAsync(string realm)
        {
            var parameters = new Dictionary<string,string> {
                { "realm", realm }
            };
            var request = new HttpRequestMessage(HttpMethod.Get, new Uri(_MetaDataTemplate.Apply(parameters)));
            request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/xml"));

            return _HttpClient.SendAsync(request)
                .ContinueWith(taskSend =>
                    taskSend.Result.EnsureSuccessStatusCode().Content.ReadAsStreamAsync())
                .Unwrap().ContinueWith(taskResponseStream =>
                    ((EntityDescriptor)new XmlSerializer(typeof(EntityDescriptor)).Deserialize(taskResponseStream.Result))
                        .IDPSSODescriptor.KeyDescriptor.KeyInfo.X509Data.X509Certificate);
        }
    }
}
