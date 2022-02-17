using System.Threading.Tasks;
using CatenaX.NetworkServices.Provisioning.Library.Models;

namespace CatenaX.NetworkServices.Provisioning.Library
{
    public interface IProvisioningManager
    {
        Task<string> SetupSharedIdpAsync(string organisationName);
        Task<string> CreateSharedUserLinkedToCentralAsync(string idpName, UserProfile userProfile, string companyName);
        Task<bool> AssignInvitedUserInitialRoles(string centralUserId);
        Task<string> SetupOwnIdpAsync(string organisationName, string clientId, string metadataUrl, string clientAuthMethod, string clientSecret);
    }
}
