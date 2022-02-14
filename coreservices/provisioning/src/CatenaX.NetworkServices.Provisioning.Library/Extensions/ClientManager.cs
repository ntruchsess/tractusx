using Keycloak.Net.Models.Clients;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using CatenaX.NetworkServices.Provisioning.Library.Models;

namespace CatenaX.NetworkServices.Provisioning.Library
{
    public partial class ProvisioningManager
    {
        private async Task<Client> GetCentralClientViewableAsync(string clientId) =>
            (await _CentralIdp.GetClientsAsync(_Settings.CentralRealm, clientId: clientId, viewableOnly: true).ConfigureAwait(false))
                .SingleOrDefault();

        private Task<bool> CreateSharedRealmIdentityProviderClientAsync(string realm, IdentityProviderClientConfig config)
        {
            var newClient = CloneClient(_Settings.SharedRealmClient);
            newClient.RedirectUris = Enumerable.Repeat<string>(config.RedirectUri, 1);
            newClient.Attributes["jwks.url"] = config.JwksUrl;
            return _SharedIdp.CreateClientAsync(realm,newClient);
        }

        private Client CloneClient(Client client) =>
            JsonSerializer.Deserialize<Client>(JsonSerializer.Serialize(client));
   }
}