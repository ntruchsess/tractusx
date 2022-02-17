using CatenaX.NetworkServices.Mailing.SendMail;
using CatenaX.NetworkServices.Mailing.Template;
using CatenaX.NetworkServices.Registration.Service.BPN;
using CatenaX.NetworkServices.Registration.Service.BusinessLogic;
using CatenaX.NetworkServices.Registration.Service.CDQ;
using CatenaX.NetworkServices.Registration.Service.Custodian;
using CatenaX.NetworkServices.Registration.Service.RegistrationAccess;
using CatenaX.NetworkServices.Keycloak.Authentication;
using CatenaX.NetworkServices.Keycloak.Factory;
using CatenaX.NetworkServices.Provisioning.Library;

using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

using Npgsql;

using System;
using System.Data;

namespace CatenaX.NetworkServices.Registration.Service
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
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc(VERSION, new OpenApiInfo { Title = TAG, Version = VERSION });
            });
            services.AddHttpClient("keycloak", c =>
            {
                c.BaseAddress = new Uri($"{ Configuration.GetValue<string>("KeyCloakConnectionString")}/auth/realms/");
            });
            
            services.AddTransient<IRegistrationBusinessLogic, RegistrationBusinessLogic>();
            services.AddTransient<IRegistrationDBAccess, RegistrationDBAccess>();

            services.AddCustodianService(Configuration.GetSection("Custodian"));

            services.AddTransient<IBPNAccess, BPNAccess>();
            services.AddHttpClient("bpn", c =>
            {
                c.BaseAddress = new Uri($"{ Configuration.GetValue<string>("BPN_Address")}");
            });
            if (Configuration.GetValue<bool?>("CDQ_Enabled") != null && Configuration.GetValue<bool>("CDQ_Enabled"))
            {
                services.AddTransient<ICDQAccess, CDQAccess>();
                services.AddHttpClient("cdq", c =>
                {
                    c.DefaultRequestHeaders.Add("X-API-KEY", Configuration.GetValue<string>("CDQ_SubscriptionKey"));
                    c.BaseAddress = new Uri($"{ Configuration.GetValue<string>("CDQ_Address")}");
                });
            }
            else
            {
                services.AddTransient<ICDQAccess, CDQAccessMock>();
            }
            services.AddTransient<IDbConnection>(conn => new NpgsqlConnection(Configuration.GetValue<string>("PostgresConnectionString")));
            services.AddTransient<IMailingService, MailingService>();
            services.AddTransient<ISendMail, SendMail>()
                    .AddTransient<ITemplateManager, TemplateManager>()
                    .ConfigureTemplateSettings(Configuration.GetSection(TemplateSettings.Position))
                    .ConfigureMailSettings(Configuration.GetSection(MailSettings.Position));
            services.AddTransient<IClaimsTransformation, KeycloakClaimsTransformation>()
                    .AddTransient<IKeycloakFactory, KeycloakFactory>()
                    .ConfigureKeycloakSettingsMap(Configuration.GetSection("Keycloak"))
                    .Configure<JwtBearerOptions>(options => Configuration.Bind("JwtBearerOptions",options));
            services.AddTransient<IProvisioningManager, ProvisioningManager>()
                    .ConfigureProvisioningSettings(Configuration.GetSection("Provisioning"));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint(string.Format("/swagger/{0}/swagger.json",VERSION), string.Format("{0} {1}",TAG,VERSION)));
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
