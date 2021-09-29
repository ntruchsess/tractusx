using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

using CatenaX.NetworkServices.Onboarding.Identity;
using CatenaX.NetworkServices.Onboarding.Identity.Identity;
using CatenaX.NetworkServices.Onboarding.Service.BusinessLogic;
using CatenaX.NetworkServices.Onboarding.Service.DataAccess;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

using Npgsql;

namespace CatenaX.NetworkServices.Onboarding.Service
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddTransient<IIdentityManager>(x => new KeycloakIdentityManager(new Keycloak.Net.KeycloakClient("http://localhost:8080", "admin", "admin",authRealm:"master")));
            services.AddTransient<IOnboardingBusinessLogic,OnboardingBusinessLogic>();
            services.AddTransient<IDbConnection>(x => new NpgsqlConnection(Configuration.GetValue<string>("PostgresConnectionString")));
            services.AddTransient<IDataAccess, DataAccessTest>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
