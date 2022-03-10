using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;

namespace CatenaX.NetworkServices.Keycloak.DBAccess

{
    public class KeycloakDBAccessSettings
    {
        public string ConnectionString { get; set; }
        public string DatabaseSchema { get; set; }
    }

    public static class KeycloakDBAccessSettingsExtention
    {
        public static IServiceCollection ConfigureKeycloakDBAccessSettings(
            this IServiceCollection services,
            IConfigurationSection section
            )
        {
            return services.Configure<KeycloakDBAccessSettings>(x => section.Bind(x));
        }
    }
}
