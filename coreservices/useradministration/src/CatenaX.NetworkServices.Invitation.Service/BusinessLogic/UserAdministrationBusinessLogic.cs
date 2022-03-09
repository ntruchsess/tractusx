
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CatenaX.NetworkServices.Invitation.Service.Models;
using CatenaX.NetworkServices.Keycloak.DBAccess;

namespace CatenaX.NetworkServices.Invitation.Service.BusinessLogic

{
    public class UserAdministrationBusinessLogic : IUserAdministrationBusinessLogic
    {
        private readonly IKeycloakDBAccess _KeycloakDBAccess;

        public UserAdministrationBusinessLogic(IKeycloakDBAccess keycloakDBAccess)
        {
            _KeycloakDBAccess = keycloakDBAccess;
        }

        public async Task<IEnumerable<JoinedUserInfo>> GetJoinedUserInfosAsync(string tenant,
                                                                               string userId = null,
                                                                               string providerUserId = null,
                                                                               string userName = null,
                                                                               string firstName = null,
                                                                               string lastName = null,
                                                                               string email = null) =>
            (await _KeycloakDBAccess.GetUserJoinedFederatedIdentity(tenant,
                                                                    userId,
                                                                    providerUserId,
                                                                    userName,
                                                                    firstName,
                                                                    lastName,
                                                                    email).ConfigureAwait(false))
                .Select( r => new JoinedUserInfo {
                    userId = r.id,
                    providerUserId = r.federated_user_id,
                    userName = r.federated_username,
                    firstName = r.first_name,
                    lastName = r.last_name,
                    email = r.email
                });
    }
}
