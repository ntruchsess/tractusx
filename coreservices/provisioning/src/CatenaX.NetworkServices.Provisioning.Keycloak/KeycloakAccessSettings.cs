using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;

namespace CatenaX.NetworkServices.Provisioning.Keycloak
{
    public class KeycloakAccessSettings
    {
        public string MetaDataPath { get; set; }
    }
    public static class KeycloakAccessSettingsExtention
    {
        public static IServiceCollection ConfigureKeycloakAccessSettings(
            this IServiceCollection services,
            IConfigurationSection section
            )
        {
            return services.Configure<KeycloakAccessSettings>(x => section.Bind(x));
        }
    }
}
