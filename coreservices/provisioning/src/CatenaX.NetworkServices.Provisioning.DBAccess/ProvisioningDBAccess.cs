using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Npgsql;
using Dapper;

using CatenaX.NetworkServices.Provisioning.DBAccess.Model;

namespace CatenaX.NetworkServices.Provisioning.DBAccess

{
    public class ProvisioningDBAccess : IProvisioningDBAccess, IDisposable
    {
        private readonly IDbConnection _dbConnection;
        private readonly string _dbSchema;

        public ProvisioningDBAccess(IOptions<ProvisioningDBAccessSettings> settings)
            : this(new NpgsqlConnection(settings.Value.ConnectionString), settings.Value.DatabaseSchema)
        {
        }

        private ProvisioningDBAccess(IDbConnection dbConnection, string dbSchema)
        {
            _dbConnection = dbConnection;
            _dbSchema = dbSchema;
        }

        public Task<Sequence> GetNextClientSequenceAsync()
        {
            string sql =
                $"INSERT INTO {_dbSchema}.iam_client_sequence VALUES(DEFAULT) RETURNING id";
            return _dbConnection.QueryFirstAsync<Sequence>(sql);
        }

        public Task<Sequence> GetNextIdentityProviderSequenceAsync()
        {
            string sql =
                $"INSERT INTO {_dbSchema}.iam_identityprovider_sequence VALUES(DEFAULT) RETURNING id";
            return _dbConnection.QueryFirstAsync<Sequence>(sql);
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
                }).ConfigureAwait(false));
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
                }).ConfigureAwait(false));
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
