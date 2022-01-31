using CatenaX.NetworkServices.Registration.Service.Custodian.Models;

using System.Collections.Generic;
using System.Reflection.Metadata;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Registration.Service.Custodian
{
    public interface ICustodianService
    {
        public Task<List<GetWallets>> GetCompanies();

        public Task CreateWallet(string bpn, string name);
    }
}
