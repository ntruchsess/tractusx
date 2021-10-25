using System.Collections.Generic;
using System.Threading.Tasks;

using CatenaX.NetworkServices.Provisioning.ActiveDirectory.Model;

namespace CatenaX.NetworkServices.Provisioning.ActiveDirectory
{
    public interface IFederation
    {
        Task<bool> CreateFederation(IDictionary<string,string> values);
    }
}
