using System.Threading.Tasks;
using CatenaX.NetworkServices.Provisioning.Library.Models;

namespace CatenaX.NetworkServices.Provisioning.Library
{
    public interface IProvisioningManager
    {
        public Task<string> SetupSharedIdpAsync(string organisationName);
        public Task<string> CreateSharedUserLinkedToCentralAsync(string idpName, UserProfile userProfile, string companyName);
        public Task<bool> AssignInvitedUserInitialRoles(string centralUserId);
    }
}
