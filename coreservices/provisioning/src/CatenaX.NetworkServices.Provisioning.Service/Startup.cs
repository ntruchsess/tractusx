using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using CatenaX.NetworkServices.Keycloak.Authentication;
using CatenaX.NetworkServices.Keycloak.Factory;
using CatenaX.NetworkServices.Provisioning.DBAccess;
using CatenaX.NetworkServices.Provisioning.Library;
using CatenaX.NetworkServices.Provisioning.Service.BusinessLogic;

namespace CatenaX.NetworkServices.Provisioning.Service
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
            services.AddTransient<IClaimsTransformation, KeycloakClaimsTransformation>()
                    .Configure<JwtBearerOptions>(options => Configuration.Bind("JwtBearerOptions",options));

            services.AddSwaggerGen(c => {
                c.SwaggerDoc(VERSION, new OpenApiInfo { Title = TAG, Version = VERSION });
            });
   
            services.AddTransient<IIdentityProviderBusinessLogic,IdentityProviderBusinessLogic>()
                    .AddTransient<IClientBusinessLogic,ClientBusinessLogic>()
                    .AddTransient<IKeycloakFactory, KeycloakFactory>()
                    .AddTransient<IProvisioningManager, ProvisioningManager>()
                    .ConfigureKeycloakSettingsMap(Configuration.GetSection("Keycloak"))
                    .ConfigureProvisioningSettings(Configuration.GetSection("Provisioning"));

            services.AddTransient<IProvisioningDBAccessFactory, ProvisioningDBAccessFactory>()
                    .ConfigureProvisioningDBAccessSettings(Configuration.GetSection("ProvisioningDBAccess"));

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            if (Configuration.GetValue<bool?>("SwaggerEnabled") != null && Configuration.GetValue<bool>("SwaggerEnabled"))
            {
                app.UseSwagger( c => c.RouteTemplate = "/api/provisioning/swagger/{documentName}/swagger.{json|yaml}");
                app.UseSwaggerUI(c => {
                    c.SwaggerEndpoint(string.Format("/api/provisioning/swagger/{0}/swagger.json",VERSION), string.Format("{0} {1}",TAG,VERSION));
                    c.RoutePrefix = "api/provisioning/swagger";
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
