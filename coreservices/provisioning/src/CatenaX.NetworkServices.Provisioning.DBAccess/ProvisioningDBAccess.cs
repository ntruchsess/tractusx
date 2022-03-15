using System.Data;
using System.Threading.Tasks;

using Dapper;

using CatenaX.NetworkServices.Provisioning.DBAccess.Model;

namespace CatenaX.NetworkServices.Provisioning.DBAccess

{
    public class ProvisioningDBAccess : IProvisioningDBAccess
    {
        private readonly IDbConnection _dbConnection;
        private readonly string _dbSchema;

        public ProvisioningDBAccess(IDbConnection dbConnection, string dbSchema)
        {
            _dbConnection = dbConnection;
            _dbSchema = dbSchema;
        }

        public async Task<Sequence> GetNextClientSequenceAsync()
        {
            string sql =
                $"INSERT INTO {_dbSchema}.iam_client_sequence VALUES(DEFAULT) RETURNING id";
            using (_dbConnection)
            {
                return await _dbConnection.QueryFirstAsync<Sequence>(sql);
            }
        }

        public async Task<Sequence> GetNextIdentityProviderSequenceAsync()
        {
            string sql =
                $"INSERT INTO {_dbSchema}.iam_identityprovider_sequence VALUES(DEFAULT) RETURNING id";
            using (_dbConnection)
            {
                return await _dbConnection.QueryFirstAsync<Sequence>(sql);
            }
        }
    }
}
