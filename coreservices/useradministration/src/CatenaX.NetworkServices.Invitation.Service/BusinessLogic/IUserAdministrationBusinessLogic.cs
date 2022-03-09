using System.Collections.Generic;
using System.Threading.Tasks;
using CatenaX.NetworkServices.Invitation.Service.Models;

namespace CatenaX.NetworkServices.Invitation.Service.BusinessLogic

{
    public interface IUserAdministrationBusinessLogic
    {
        Task<IEnumerable<JoinedUserInfo>> GetJoinedUserInfosAsync(string tenant,
                                                                  string userId = null,
                                                                  string providerUserId = null,
                                                                  string userName = null,
                                                                  string firstName = null,
                                                                  string lastName = null,
                                                                  string email = null);
    }
}
