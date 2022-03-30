using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;

using CatenaX.NetworkServices.Framework.DBAccess;

namespace CatenaX.NetworkServices.PortalBackend.DBAccess

{
    public class PortalBackendDBAccess : IPortalBackendDBAccess
    {
        private readonly IDBConnectionFactory _DBConnection;
        private readonly string _dbSchema;

        public PortalBackendDBAccess(IDBConnectionFactories dbConnectionFactories)
           : this(dbConnectionFactories.Get("Portal"))
        {
        }

        public PortalBackendDBAccess(IDBConnectionFactory dbConnectionFactory)
        {
            _DBConnection = dbConnectionFactory;
            _dbSchema = dbConnectionFactory.Schema();
        }

        public async Task<IEnumerable<string>> GetBpnForUserAsync(Guid userId, string bpn = null)
        {
            if (userId == null)
            {
                throw new ArgumentNullException(nameof(userId));
            }
            string sql =
                    $@"SELECT bpn
                    FROM {_dbSchema}.company_users u JOIN {_dbSchema}.companies comp
                    ON u.company_id = comp.company_id
                    JOIN {_dbSchema}.iam_users i
                    ON u.company_user_id = i.company_user_id
                    WHERE i.iam_user_id = @userId" +
                    (bpn == null ? "" : " AND comp.bpn = @bpn");
            using (var connection = _DBConnection.Connection())
            {
                var bpnResult = (await connection.QueryAsync<string>(sql, new {
                        userId,
                        bpn
                    }).ConfigureAwait(false));
                if (!bpnResult.Any())
                {
                    throw new InvalidOperationException("BPN not found");
                }
                return bpnResult;
            }
        }

        public async Task<string> GetIdpAliasForCompanyIdAsync(Guid companyId, string idpAlias = null)
        {
            if (companyId == null)
            {
                throw new ArgumentNullException(nameof(companyId));
            }
            string sql =
                    $@"SELECT i.iam_idp_alias
                    FROM {_dbSchema}.company_identity_provider c
                    JOIN {_dbSchema}.iam_identity_providers i
                    ON c.identity_provider_id = i.identity_provider_id
                    WHERE c.company_id = @companyId" +
                    (idpAlias == null ? "" : " AND i.iam_idp_alias = @idpAlias");
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
