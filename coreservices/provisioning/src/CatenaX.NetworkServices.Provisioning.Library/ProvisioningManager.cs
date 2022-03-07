using Keycloak.Net;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CatenaX.NetworkServices.Keycloak.Factory;
using CatenaX.NetworkServices.Provisioning.Library.Models;

namespace CatenaX.NetworkServices.Provisioning.Library
{
    public partial class ProvisioningManager: IProvisioningManager
    {
        private readonly KeycloakClient _CentralIdp;
        private readonly KeycloakClient _SharedIdp;
        private readonly ProvisioningSettings _Settings;

        public ProvisioningManager(IKeycloakFactory factory, IOptions<ProvisioningSettings> options)
        {
            _CentralIdp = factory.CreateKeycloakClient("central");
            _SharedIdp = factory.CreateKeycloakClient("shared");
            _Settings = options.Value;
        }

        public async Task<string> SetupSharedIdpAsync(string organisationName)
        {
            var idpName = await GetNextCentralIdentityProviderNameAsync().ConfigureAwait(false);
            
            if (! await CreateCentralIdentityProviderAsync(idpName, organisationName).ConfigureAwait(false)) return null;
            
            if (! await CreateSharedRealmAsync(idpName, organisationName).ConfigureAwait(false)) return null;
            
            if (! await UpdateCentralIdentityProviderUrlsAsync(idpName, await GetSharedRealmOpenIDConfigAsync(idpName).ConfigureAwait(false)).ConfigureAwait(false)) return null;
            
            if (! await CreateCentralIdentityProviderTenantMapperAsync(idpName).ConfigureAwait(false)) return null;
            
            if (! await CreateCentralIdentityProviderOrganisationMapperAsync(idpName, organisationName).ConfigureAwait(false)) return null;
            
            if (! await CreateCentralIdentityProviderUsernameMapperAsync(idpName).ConfigureAwait(false)) return null;
            
            if (! await CreateSharedRealmIdentityProviderClientAsync(idpName, new IdentityProviderClientConfig {
                RedirectUri = await GetCentralBrokerEndpointAsync(idpName).ConfigureAwait(false),
                JwksUrl = await GetCentralRealmJwksUrlAsync().ConfigureAwait(false)
            }).ConfigureAwait(false)) return null;

            if (! await EnableCentralIdentityProviderAsync(idpName).ConfigureAwait(false)) return null;
            
            return idpName;
        }

        public async Task<string> SetupOwnIdpAsync(string organisationName, string clientId, string metadataUrl, string clientAuthMethod, string clientSecret)
        {
            var idpName = await GetNextCentralIdentityProviderNameAsync().ConfigureAwait(false);

            if (! await CreateCentralIdentityProviderAsync(idpName, organisationName).ConfigureAwait(false)) return null;

            var identityProvider = await SetIdentityProviderMetadataFromUrlAsync(await GetCentralIdentityProviderAsync(idpName).ConfigureAwait(false), metadataUrl).ConfigureAwait(false);

            if (identityProvider == null) return null;

            identityProvider.Config.ClientId = clientId;
            identityProvider.Config.ClientAuthMethod = clientAuthMethod;
            identityProvider.Config.ClientSecret = clientSecret;

            if (! await UpdateCentralIdentityProviderAsync(idpName, identityProvider).ConfigureAwait(false)) return null;

            if (! await CreateCentralIdentityProviderTenantMapperAsync(idpName).ConfigureAwait(false)) return null;

            if (! await CreateCentralIdentityProviderOrganisationMapperAsync(idpName, organisationName).ConfigureAwait(false)) return null;

            if (! await CreateCentralIdentityProviderUsernameMapperAsync(idpName).ConfigureAwait(false)) return null;

            if (! await EnableCentralIdentityProviderAsync(idpName).ConfigureAwait(false)) return null;

            return idpName;
        }

        public async Task<string> CreateSharedUserLinkedToCentralAsync(string idpName, UserProfile userProfile, string organisationName)
        {
            var userIdShared = await CreateSharedRealmUserAsync(idpName, userProfile).ConfigureAwait(false);

            if (userIdShared == null) return null;

            var userIdCentral = await CreateCentralUserAsync(idpName, new UserProfile {
                UserName = idpName + "." + userIdShared,
                FirstName = userProfile.FirstName,
                LastName = userProfile.LastName,
                Email = userProfile.Email
            }, organisationName).ConfigureAwait(false);

            if (userIdCentral == null) return null;

            if(! await LinkCentralSharedRealmUserAsync(idpName, userIdCentral, userIdShared, userProfile.UserName).ConfigureAwait(false)) return null;
            
            return userIdCentral;
        }

        public Task<bool> AssignInvitedUserInitialRoles(string centralUserId) =>
            AssignClientRolesToCentralUserAsync(centralUserId,_Settings.InvitedUserInitialRoles);

        public async Task<IEnumerable<string>> GetClientRolesAsync(string clientId) =>
            (await _CentralIdp.GetRolesAsync(_Settings.CentralRealm, clientId).ConfigureAwait(false)).Select(g => g.Name);

        public async Task<IEnumerable<string>> GetClientRolesCompositeAsync(string clientId) =>
            (await _CentralIdp.GetRolesAsync(_Settings.CentralRealm, clientId).ConfigureAwait(false)).Where(r => r.Composite == true).Select(g => g.Name);

        public async Task<IEnumerable<UserInfo>> GetUsersFromSharedAsync(string idpName)
        {
            var users = (await _SharedIdp.GetUsersAsync(idpName, briefRepresentation: true).ConfigureAwait(false))
                .Select( o => new UserInfo
                {
                    userName = o.UserName,
                    firstName = o.FirstName,
                    lastName = o.LastName,
                    eMail = o.Email,
                    enabled = o.Enabled
                });
                return users;
        }
    }
}
