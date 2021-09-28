using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

using Keycloak.Net;
using Keycloak.Net.Models.RealmsAdmin;
using Keycloak.Net.Models.Users;

using CatenaX.NetworkServices.Onboarding.Identity.Identity.Model;

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
                _Realm = realm.Name
            };
            await _client.ImportRealmAsync(realm.Name, realmToCreate);
        }

        public async Task CreateUser(string realm, CreateUser user)
        {
            var userToCreate = new User
            {
                UserName = user.UserName,
                FirstName = user.FirstName,
                LastName = user.LastName
            };
            await _client.CreateUserAsync(realm, userToCreate);
        }
    }
}
