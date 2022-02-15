using System.Text.Json;
using System.Threading.Tasks;
using Keycloak.Net.Models.RealmsAdmin;
using CatenaX.NetworkServices.Provisioning.Library.Models;

namespace CatenaX.NetworkServices.Provisioning.Library
{
    public partial class ProvisioningManager
    {
        private Task<bool> CreateSharedRealmAsync(string realm, string name)
        {
            var newRealm = CloneRealm(_Settings.SharedRealm);
            newRealm.Id = realm;
            newRealm._Realm = realm;
            newRealm.DisplayName = name;
            return _SharedIdp.ImportRealmAsync(realm, newRealm);
        }

        private async Task<OpenIDConfig> GetSharedRealmOpenIDConfigAsync(string realm)
        {
            var config = (await _SharedIdp.GetOpenIDConfigurationAsync(realm).ConfigureAwait(false));
            return new OpenIDConfig
            {
                AuthorizationEndpoint = config.AuthorizationEndpoint.ToString(),
                TokenEndpoint = config.TokenEndpoint.ToString(),
                EndSessionEndpoint = config.EndSessionEndpoint.ToString(),
                JwksUri = config.JwksUri.ToString()
            };
        }

        private async Task<string> GetCentralRealmJwksUrlAsync() =>
            (await _CentralIdp.GetOpenIDConfigurationAsync(_Settings.CentralRealm).ConfigureAwait(false)).JwksUri.ToString();

        private Realm CloneRealm(Realm realm) =>
            JsonSerializer.Deserialize<Realm>(JsonSerializer.Serialize(realm));
    }
}
