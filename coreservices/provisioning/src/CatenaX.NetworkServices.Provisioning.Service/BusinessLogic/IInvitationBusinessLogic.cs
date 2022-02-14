using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Provisioning.Service.BusinessLogic
{
    public interface IInvitationBusinessLogic
    {
        public Task<bool> ExecuteInvitation(InvitationData invitationData);
    }
}
