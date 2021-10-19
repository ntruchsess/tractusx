using System.Threading.Tasks;

using CatenaX.NetworkServices.Provisioning.ActiveDirectory.Model;

namespace CatenaX.NetworkServices.Provisioning.ActiveDirectory
{
    public interface IFederation
    {
        Task CreateFederation(string realm);
    }
}
