using System.Data;
using System.Threading.Tasks;

using Dapper;

using CatenaX.NetworkServices.Provisioning.DBAccess.Model;
using System.Collections.Generic;
using System;
using System.Linq;

namespace CatenaX.NetworkServices.Provisioning.DBAccess

{
    public class ProvisioningDBAccess : IProvisioningDBAccess, IDisposable
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
            return await _dbConnection.QueryFirstAsync<Sequence>(sql);
        }

        public async Task<Sequence> GetNextIdentityProviderSequenceAsync()
        {
            string sql =
                $"INSERT INTO {_dbSchema}.iam_identityprovider_sequence VALUES(DEFAULT) RETURNING id";
            return await _dbConnection.QueryFirstAsync<Sequence>(sql);
        }

        public async Task<IEnumerable<string>> GetBpnForUserAsync(string userId, string bpn = null)
        {
            if (userId == null)
            {
                throw new ArgumentNullException(nameof(userId));
            }
            string sql =
                    $@"SELECT bpn
                    FROM {_dbSchema}.company_user u JOIN {_dbSchema}.company comp
                    ON u.company_companyid = comp.companyid
                    JOIN {_dbSchema}.iam_user i
                    ON u.uuid = i.company_user_uuid
                    WHERE i.iam_userid = @userId" +
                    (bpn == null ? "" : " AND comp.bpn = @bpn");
            var bpnResult = (await _dbConnection.QueryAsync<string>(sql, new {
                    userId = new Guid(userId),
                    bpn
                }));
            if (!bpnResult.Any())
            {
                throw new InvalidOperationException("BPN not found");
            }
            return bpnResult;
        }

        public async Task<string> GetIdpAliasFromCompanyIdAsync(string companyId, string idpAlias = null)
        {
            if (companyId == null)
            {
                throw new ArgumentNullException(nameof(companyId));
            }
            string sql =
                    $@"SELECT idp_alias
                    FROM {_dbSchema}.iam_idp_company idp
                    WHERE companyid = @companyId" +
                    (idpAlias == null ? "" : " AND idp_alias = @idpAlias");
            var idpAliasResult = (await _dbConnection.QuerySingleAsync<string>(sql, new {
                    companyId,
                    idpAlias
                }));
            if (String.IsNullOrEmpty(idpAliasResult))
            {
                throw new InvalidOperationException("idpAlias not found");
            }
            return idpAliasResult;
        }

        public void Dispose()
        {
            _dbConnection.Dispose();
        }
    }
}
