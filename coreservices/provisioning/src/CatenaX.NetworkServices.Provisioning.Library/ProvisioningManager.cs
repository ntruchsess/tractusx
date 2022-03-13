using Keycloak.Net;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CatenaX.NetworkServices.Keycloak.Factory;
using CatenaX.NetworkServices.Provisioning.Library.Models;
using CatenaX.NetworkServices.Keycloak.DBAccess;

namespace CatenaX.NetworkServices.Provisioning.Library
{
    public partial class ProvisioningManager: IProvisioningManager
    {
        private readonly KeycloakClient _CentralIdp;
        private readonly KeycloakClient _SharedIdp;
        private readonly IKeycloakDBAccess _DBAccess;
        private readonly ProvisioningSettings _Settings;

        public ProvisioningManager(IKeycloakFactory factory, IKeycloakDBAccessFactory dBAccessFactory, IOptions<ProvisioningSettings> options)
        {
            _CentralIdp = factory.CreateKeycloakClient("central");
            _SharedIdp = factory.CreateKeycloakClient("shared");
            _Settings = options.Value;
            _DBAccess = dBAccessFactory?.CreateKeycloakDBAccess();
        }

        public ProvisioningManager(IKeycloakFactory factory, IOptions<ProvisioningSettings> options)
            : this(factory,null,options)
        {
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

        public async Task<IEnumerable<string>> GetClientRolesAsync(string clientId)
        {
            var idOfClient = await GetIdOfClientFromClientIDAsync(clientId).ConfigureAwait(false);
            return (await _CentralIdp.GetRolesAsync(_Settings.CentralRealm, idOfClient).ConfigureAwait(false))
                .Select(g => g.Name);
        }

        public async Task<IEnumerable<string>> GetClientRolesCompositeAsync(string clientId)
        {
            var idOfClient = await GetIdOfClientFromClientIDAsync(clientId).ConfigureAwait(false);
            return (await _CentralIdp.GetRolesAsync(_Settings.CentralRealm, idOfClient).ConfigureAwait(false))
                .Where(r => r.Composite == true)
                .Select(g => g.Name);
        }

        public async Task<string> GetProviderUserIdForCentralUserIdAsync(string userId) =>
            (await _CentralIdp.GetUserSocialLoginsAsync(_Settings.CentralRealm, userId).ConfigureAwait(false))
                .SingleOrDefault()?.UserId;

        public async Task<bool> DeleteSharedAndCentralUserAsync(string idpName, string userIdShared)
        {
            var userIdCentral = await GetCentralUserIdForProviderIdAsync(idpName, userIdShared).ConfigureAwait(false);

            if (! await DeleteSharedRealmUserAsync(idpName, userIdShared).ConfigureAwait(false)) return false;

            if (! await DeleteCentralRealmUserAsync(_Settings.CentralRealm, userIdCentral).ConfigureAwait(false)) return false;

            return true;
        }

        public async Task<IEnumerable<JoinedUserInfo>> GetJoinedUsersAsync(string idpName,
                                                               string userId = null,
                                                               string providerUserId = null,
                                                               string userName = null,
                                                               string firstName = null,
                                                               string lastName = null,
                                                               string email = null) =>
            (await _DBAccess.GetUserJoinedFederatedIdentityAsync(idpName,
                                                                 _Settings.CentralRealmId,
                                                                 userId,
                                                                 providerUserId,
                                                                 userName,
                                                                 firstName,
                                                                 lastName,
                                                                 email))
                .Select( x => new JoinedUserInfo {
                    userId = x.id,
                    providerUserId = x.federated_user_id,
                    userName = x.federated_username,
                    enabled = x.enabled,
                    firstName = x.first_name,
                    lastName = x.last_name,
                    email = x.email
                });

        public async Task<string> SetupClientAsync(string redirectUrl)
        {
            var clientId = await GetNextClientIdAsync().ConfigureAwait(false);
            var internalId = (await CreateCentralOIDCClientAsync(clientId,redirectUrl).ConfigureAwait(false));
            await CreateCentralOIDCClientAudienceMapperAsync(internalId, clientId).ConfigureAwait(false);
            return clientId;
        }
    }
}
