using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Provisioning.Service.BusinessLogic
{
    public interface IIdentityProviderBusinessLogic
    {
        public Task<string > CreateIdentityProvider(IdentityProviderSetupData identityProviderData);
    }
}
