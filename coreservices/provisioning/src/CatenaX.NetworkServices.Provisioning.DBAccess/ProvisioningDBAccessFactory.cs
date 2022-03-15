using Microsoft.Extensions.Options;
using Npgsql;

namespace CatenaX.NetworkServices.Provisioning.DBAccess

{
    public class ProvisioningDBAccessFactory : IProvisioningDBAccessFactory
    {
        private readonly ProvisioningDBAccessSettings _Settings;

        public ProvisioningDBAccessFactory(IOptions<ProvisioningDBAccessSettings> options)
        {
            _Settings = options.Value;
        }
        
        public IProvisioningDBAccess CreateProvisioningDBAccess() =>
            new ProvisioningDBAccess(new NpgsqlConnection(_Settings.ConnectionString), _Settings.DatabaseSchema);
    }
}
