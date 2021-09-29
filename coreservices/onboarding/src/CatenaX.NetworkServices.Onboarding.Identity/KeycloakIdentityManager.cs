using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

using Keycloak.Net;
using Keycloak.Net.Models.RealmsAdmin;
using Keycloak.Net.Models.Users;

using Keycloak.Net.Models.Groups;
using CatenaX.NetworkServices.Onboarding.Identity.Model;

namespace CatenaX.NetworkServices.Onboarding.Identity.Identity
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

        public async Task CreateUser(string realm, CreateUser user)
        {
            var userToCreate = new User
            {
                UserName = user.UserName,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Groups = user.Groups,
                Credentials = new List<Credentials>() { new Credentials { Type = "Password", Value = "initPassword" } }
                
            };
            await _client.CreateUserAsync(realm, userToCreate);
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
