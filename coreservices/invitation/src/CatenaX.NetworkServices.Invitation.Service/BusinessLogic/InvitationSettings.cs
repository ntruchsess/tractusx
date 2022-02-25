using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CatenaX.NetworkServices.Invitation.Service.BusinessLogic
{
    public class InvitationSettings
    {
        public InvitationSetting Portal { get; set; }
        public InvitationSetting Registration { get; set; }
    }

    public class InvitationSetting
    {
        public string KeyCloakClientID { get; set; }
        public string BasePortalAddress { get; set; }
    }

    public static class InvitationSettingsExtension
    {
        public static IServiceCollection ConfigureInvitationSettings(
            this IServiceCollection services,
            IConfigurationSection section
            )
        {
            return services.Configure<InvitationSettings>(x => section.Bind(x));
        }
    }

}
