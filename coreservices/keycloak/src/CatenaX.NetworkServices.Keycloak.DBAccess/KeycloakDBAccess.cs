using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

using Dapper;

using CatenaX.NetworkServices.Keycloak.DBAccess.Model;

namespace CatenaX.NetworkServices.Keycloak.DBAccess

{
    public class KeycloakDBAccess : IKeycloakDBAccess
    {
        private readonly IDbConnection _dbConnection;

        public KeycloakDBAccess(IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
        }

        public async Task<IEnumerable<UserJoinedFederatedIdentity>> GetUserJoinedFederatedIdentity(string idpName,
                                                                                                   string userId = null,
                                                                                                   string providerUserId = null,
                                                                                                   string userName = null,
                                                                                                   string firstName = null,
                                                                                                   string lastName = null,
                                                                                                   string email = null)
        {
            string sql =
                "SELECT" +
                " id," +
                " email," +
                " first_name," +
                " last_name," +
                " federated_user_id," +
                " federated_username" +
                " FROM public.user_entity c" +
                " JOIN public.federated_identity f" +
                " ON c.realm_id = f.realm_id" +
                " AND c.id = f.user_id" +
                " WHERE f.identity_provider = @idpName" +
                (userId         == null ? "" : " AND c.id = @userId") +
                (providerUserId == null ? "" : " AND f.federated_user_id = @providerUserId") +
                (userName       == null ? "" : " AND f.federated_username = @userName") +
                (firstName      == null ? "" : " AND c.first_name = @firstName") +
                (lastName       == null ? "" : " AND c.last_name = @lastName") + 
                (email          == null ? "" : " AND c.email = @email");
            using (_dbConnection)
            {
                return await _dbConnection.QueryAsync<UserJoinedFederatedIdentity>(sql, new { idpName        = idpName,
                                                                                              userId         = userId,
                                                                                              providerUserId = providerUserId,
                                                                                              userName       = userName,
                                                                                              firstName      = firstName,
                                                                                              lastName       = lastName,
                                                                                              email          = email });
            }
        }
    }
}
