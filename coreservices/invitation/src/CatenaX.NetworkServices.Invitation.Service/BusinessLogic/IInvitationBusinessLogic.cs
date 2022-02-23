using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Invitation.Service.BusinessLogic
{
    public interface IInvitationBusinessLogic
    {
        Task<bool> ExecuteInvitation(InvitationData invitationData);
    }
}
