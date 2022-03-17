using Flurl.Http;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using CatenaX.NetworkServices.Keycloak.Authentication;
using CatenaX.NetworkServices.Keycloak.DBAccess;
using CatenaX.NetworkServices.Keycloak.Factory;
using CatenaX.NetworkServices.Mailing.SendMail;
using CatenaX.NetworkServices.Mailing.Template;
using CatenaX.NetworkServices.Provisioning.DBAccess;
using CatenaX.NetworkServices.Provisioning.Library;
using CatenaX.NetworkServices.Provisioning.Library.Utils;
using CatenaX.NetworkServices.UserAdministration.Service.BusinessLogic;

namespace CatenaX.NetworkServices.UserAdministration.Service
{
    public class Startup
    {
        private static string TAG = typeof(Startup).Namespace;
        private static string VERSION = "v2";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options => Configuration.Bind("JwtBearerOptions",options));

            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

            services.AddTransient<IAuthorizationHandler,ClaimRequestPathHandler>()
                    .AddAuthorization(option => {
                        option.AddPolicy("CheckTenant", policy =>
                        {
                            policy.AddRequirements(new ClaimRequestPathRequirement("tenant","tenant"));
                        });
                    })
                    .AddTransient<IHttpContextAccessor,HttpContextAccessor>();

            services.AddSwaggerGen(c => c.SwaggerDoc(VERSION, new OpenApiInfo { Title = TAG, Version = VERSION }));

            services.AddTransient<IMailingService, MailingService>()
                    .AddTransient<ISendMail, SendMail>()
                    .ConfigureMailSettings(Configuration.GetSection(MailSettings.Position));

            services.AddTransient<ITemplateManager, TemplateManager>()
                    .ConfigureTemplateSettings(Configuration.GetSection(TemplateSettings.Position));

            services.AddTransient<IClaimsTransformation, KeycloakClaimsTransformation>()
                    .Configure<JwtBearerOptions>(options => Configuration.Bind("JwtBearerOptions",options));
                    
            services.AddTransient<IKeycloakFactory, KeycloakFactory>()
                    .ConfigureKeycloakSettingsMap(Configuration.GetSection("Keycloak"));

            services.AddTransient<IProvisioningManager, ProvisioningManager>()
                    .ConfigureProvisioningSettings(Configuration.GetSection("Provisioning"));
                    
            services.AddTransient<IUserAdministrationBusinessLogic, UserAdministrationBusinessLogic>()
                    .ConfigureUserAdministrationSettings(Configuration.GetSection("Invitation"));

            services.AddTransient<IKeycloakDBAccessFactory, KeycloakDBAccessFactory>()
                    .ConfigureKeycloakDBAccessSettings(Configuration.GetSection("KeycloakDBAccess"));

            services.AddTransient<IProvisioningDBAccessFactory, ProvisioningDBAccessFactory>()
                    .ConfigureProvisioningDBAccessSettings(Configuration.GetSection("ProvisioningDBAccess"));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                FlurlHttp.ConfigureClient("https://localhost", cli => cli.Settings.HttpClientFactory = new UntrustedCertClientFactory());
            }

            if (Configuration.GetValue<bool?>("SwaggerEnabled") != null && Configuration.GetValue<bool>("SwaggerEnabled"))
            {
                app.UseSwagger( c => c.RouteTemplate = "/api/useradministration/swagger/{documentName}/swagger.{json|yaml}");
                app.UseSwaggerUI(c => {
                    c.SwaggerEndpoint(string.Format("/api/useradministration/swagger/{0}/swagger.json",VERSION), string.Format("{0} {1}",TAG,VERSION));
                    c.RoutePrefix = "api/useradministration/swagger";
                });
            }

            //app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
