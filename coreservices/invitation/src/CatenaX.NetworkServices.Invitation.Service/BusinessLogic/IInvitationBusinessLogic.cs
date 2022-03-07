using System.Collections.Generic;
using System.Threading.Tasks;
using CatenaX.NetworkServices.Provisioning.Library;
using CatenaX.NetworkServices.Provisioning.Library.Models;

namespace CatenaX.NetworkServices.Invitation.Service.BusinessLogic
{
    public interface IInvitationBusinessLogic
    {
        Task<bool> ExecuteInvitation(InvitationData invitationData);
        Task<IEnumerable<string>> CreateUsersAsync(IEnumerable<UserCreationInfo> userList, string tenant, string createdByName);
        Task<IEnumerable<UserInfo>> GetUsersAsync(string tenant);
        Task<IEnumerable<string>> GetAppRolesAsync(string clientId);
        Task<bool> DeleteUserAsync(string tenant, string userName);
        Task<IEnumerable<string>> DeleteUsersAsync(IEnumerable<UserDeletionInfo> userList, string tenant);
    }
}
