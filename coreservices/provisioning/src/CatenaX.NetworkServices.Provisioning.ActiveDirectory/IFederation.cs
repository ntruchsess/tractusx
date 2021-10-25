using System.Collections.Generic;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Provisioning.ActiveDirectory
{
    public interface IFederation
    {
        Task<bool> CreateFederationAsync(IDictionary<string,string> values);
        Task<bool> SendInvitationAsync(string email);
    }
}
