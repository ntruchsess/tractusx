using System.Data;
using System.Threading.Tasks;

using Dapper;

using CatenaX.NetworkServices.Provisioning.DBAccess.Model;
using System.Collections.Generic;
using System;

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

        public async Task<IEnumerable<Bpn>> GetBpnForUserAsync(
                string userId,
                string bpn = null
            )
        {
            string sql =
                    $@"SELECT bpn
                    FROM {_dbSchema}.company_user u JOIN {_dbSchema}.company comp
                    ON u.company_companyid = comp.companyid
                    JOIN {_dbSchema}.iam_user i
                    ON u.uuid = i.company_user_uuid
                    WHERE i.iam_userid = @userId" +
                    (bpn == null ? "" : " AND comp.bpn = @bpn");
            using (_dbConnection)
            {
                return await _dbConnection.QueryAsync<Bpn>(sql, new {
                        userId = new Guid(userId),
                        bpn
                    });
            }
        }
    }
}
