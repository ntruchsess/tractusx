using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;

using CatenaX.NetworkServices.Provisioning.DBAccess.Model;
using CatenaX.NetworkServices.Framework.DBAccess;

namespace CatenaX.NetworkServices.Provisioning.DBAccess

{
    public class ProvisioningDBAccess : IProvisioningDBAccess
    {
        private readonly IDBConnectionFactory _DBConnection;
        private readonly string _dbSchema;

        public ProvisioningDBAccess(IDBConnectionFactories dbConnectionFactories)
           : this(dbConnectionFactories.Get("Provisioning"))
        {
        }

        public ProvisioningDBAccess(IDBConnectionFactory dbConnectionFactory)
        {
            _DBConnection = dbConnectionFactory;
            _dbSchema = dbConnectionFactory.Schema();
        }

        public async Task<Sequence> GetNextClientSequenceAsync()
        {
            string sql =
                $"INSERT INTO {_dbSchema}.iam_client_sequence VALUES(DEFAULT) RETURNING id";
            using (var connection = _DBConnection.Connection())
            {
                return await connection.QueryFirstAsync<Sequence>(sql).ConfigureAwait(false);
            }
        }

        public async Task<Sequence> GetNextIdentityProviderSequenceAsync()
        {
            string sql =
                $"INSERT INTO {_dbSchema}.iam_identityprovider_sequence VALUES(DEFAULT) RETURNING id";
            using (var connection = _DBConnection.Connection())
            {
                return await connection.QueryFirstAsync<Sequence>(sql).ConfigureAwait(false);
            }
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
            using (var connection = _DBConnection.Connection())
            {
                var bpnResult = (await connection.QueryAsync<string>(sql, new {
                        userId = new Guid(userId),
                        bpn
                    }).ConfigureAwait(false));
                if (!bpnResult.Any())
                {
                    throw new InvalidOperationException("BPN not found");
                }
                return bpnResult;
            }
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
            using (var connection = _DBConnection.Connection())
            {
                var idpAliasResult = (await connection.QuerySingleAsync<string>(sql, new {
                        companyId,
                        idpAlias
                    }).ConfigureAwait(false));
                if (String.IsNullOrEmpty(idpAliasResult))
                {
                    throw new InvalidOperationException("idpAlias not found");
                }
                return idpAliasResult;
            }
        }
    }
}
