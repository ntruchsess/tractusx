using System.Threading.Tasks;
using Flurl.Http;
using Keycloak.Net.Models.AttackDetection;

namespace Keycloak.Net
{
    public partial class KeycloakClient
    {
        public async Task<bool> ClearUserLoginFailuresAsync(string realm)
        {
            var response = await (await GetBaseUrlAsync(realm).ConfigureAwait(false))
                .AppendPathSegment($"/admin/realms/{realm}/attack-detection/brute-force/users")
                .DeleteAsync()
                .ConfigureAwait(false);
            return response.IsSuccessStatusCode;
        }

        public async Task<bool> ClearUserLoginFailuresAsync(string realm, string userId)
        {
            var response = await (await GetBaseUrlAsync(realm).ConfigureAwait(false))
                .AppendPathSegment($"/admin/realms/{realm}/attack-detection/brute-force/users/{userId}")
                .DeleteAsync()
                .ConfigureAwait(false);
            return response.IsSuccessStatusCode;
        }

        public async Task<UserNameStatus> GetUserNameStatusInBruteForceDetectionAsync(string realm, string userId) => await (await GetBaseUrlAsync(realm).ConfigureAwait(false))
            .AppendPathSegment($"/admin/realms/{realm}/attack-detection/brute-force/users/{userId}")
            .GetJsonAsync<UserNameStatus>()
            .ConfigureAwait(false);
    }
}
