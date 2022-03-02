using System.Collections.Generic;
using System.Threading.Tasks;
using CatenaX.NetworkServices.Provisioning.Library;
using Keycloak.Net.Models.Users;

namespace CatenaX.NetworkServices.Invitation.Service.BusinessLogic
{
    public interface IInvitationBusinessLogic
    {
        Task<bool> ExecuteInvitation(InvitationData invitationData);
        Task<IEnumerable<string>> CreateUsersAsync(IEnumerable<UserCreationInfo> userList, string tenant, string createdByName);
        Task<IEnumerable<User>> GetUsersAsync(string tenant);
    }
}
