using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;

namespace CatenaX.NetworkServices.Provisioning.DBAccess

{
    public class ProvisioningDBAccessSettings
    {
    }

    public static class ProvisioningDBAccessSettingsExtention
    {
        public static IServiceCollection ConfigureProvisioningDBAccessSettings(
            this IServiceCollection services,
            IConfigurationSection section
            )
        {
            return services.Configure<ProvisioningDBAccessSettings>(x => section.Bind(x));
        }
    }
}
