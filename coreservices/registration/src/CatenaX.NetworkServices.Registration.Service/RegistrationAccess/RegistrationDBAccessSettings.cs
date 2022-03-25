using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;

namespace CatenaX.NetworkServices.Registration.Service.RegistrationAccess

{
    public class RegistrationDBAccessSettings
    {
        public string ConnectionString { get; set; }
        public string DatabaseSchema { get; set; }
    }

    public static class RegistrationDBAccessSettingsExtention
    {
        public static IServiceCollection ConfigureRegistrationDBAccessSettings(
            this IServiceCollection services,
            IConfigurationSection section
            )
        {
            return services.Configure<RegistrationDBAccessSettings>(x => section.Bind(x));
        }
    }
}
