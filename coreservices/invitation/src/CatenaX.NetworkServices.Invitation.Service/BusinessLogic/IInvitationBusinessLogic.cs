using System.Collections.Generic;
using System.Threading.Tasks;
using CatenaX.NetworkServices.Provisioning.Library;

namespace CatenaX.NetworkServices.Invitation.Service.BusinessLogic
{
    public interface IInvitationBusinessLogic
    {
        Task<bool> ExecuteInvitation(InvitationData invitationData);
        Task<IEnumerable<string>> CreateUsersAsync(List<UserCreationInfo> userList, string tenant, string createdByEmail, string createdByName);
    }
}
