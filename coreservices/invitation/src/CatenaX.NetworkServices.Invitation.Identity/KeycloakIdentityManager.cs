using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Keycloak.Net;
using Keycloak.Net.Models.RealmsAdmin;
using Keycloak.Net.Models.Users;
using Keycloak.Net.Models.Clients;
using Keycloak.Net.Models.ClientScopes;
using Keycloak.Net.Models.Groups;
using CatenaX.NetworkServices.Invitation.Identity.Model;
using PasswordGenerator;

namespace CatenaX.NetworkServices.Invitation.Identity.Identity
{
    public class KeycloakIdentityManager : IIdentityManager
    {
        private readonly KeycloakClient _client;

        public KeycloakIdentityManager(KeycloakClient client)
        {
            _client = client;
        }

        public async Task CreateRealm(CreateRealm realm)
        {
            var realmToCreate = new Realm
            {
                _Realm = realm.Name,
                DefaultRoles = new List<string>{"role1","role2" }
            };
            await _client.ImportRealmAsync(realm.Name, realmToCreate);
        }

        public async Task CreateClient(string realm, CreateClient client)
        {
            var clientToCreate = new Client
            {
                ClientId = client.ClientId,
                RedirectUris = client.RedirectUris,
                Protocol = client.Protocol,
                Attributes = client.Attributes,
                FullScopeAllowed = client.FullScopeAllowed,
                ProtocolMappers = client.ProtocollMappers.Select(item =>
                    new ClientProtocolMapper {
                        Name = item.Name,
                        Protocol = item.Protocol,
                        ProtocolMapper = item.ProtocolMapper,
                        ConsentRequired = item.ConsentRequired,
                        Config = new ClientConfig {
                            UserAttribute = (string)item.Config["user.attribute"],
                            FriendlyName = (string)item.Config["friendly.name"],
                            AttributeName = (string)item.Config["attribute.name"]
                    }
                }).ToList()
            };
            await _client.CreateClientAsync(realm, clientToCreate);
        }

        public async Task<string> CreateUser(string realm, CreateUser user)
        {
            var pwd = new Password();
            var result = pwd.Next();
            var userToCreate = new User
            {
                UserName = user.UserName,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Groups = user.Groups,
                Credentials = new List<Credentials>() { new Credentials { Type = "Password", Value = result } }
                
            };
            await _client.CreateUserAsync(realm, userToCreate);

            return result;
        }

        public async Task CreateGroup(string realm, CreateGroup group)
        {
            var groupToCreate = new Group
            {
                Name = group.Name
            };
            await _client.CreateGroupAsync(realm, groupToCreate);
        }
    }
}
