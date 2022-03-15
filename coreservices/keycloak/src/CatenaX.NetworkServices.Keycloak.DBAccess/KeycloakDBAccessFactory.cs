using Microsoft.Extensions.Options;
using Npgsql;

namespace CatenaX.NetworkServices.Keycloak.DBAccess

{
    public class KeycloakDBAccessFactory : IKeycloakDBAccessFactory
    {
        private readonly KeycloakDBAccessSettings _Settings;

        public KeycloakDBAccessFactory(IOptions<KeycloakDBAccessSettings> options)
        {
            _Settings = options.Value;
        }
        
        public IKeycloakDBAccess CreateKeycloakDBAccess() =>
            new KeycloakDBAccess(new NpgsqlConnection(_Settings.ConnectionString), _Settings.DatabaseSchema);
    }
}
