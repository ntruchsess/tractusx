using System.Collections.Generic;
using System.Threading.Tasks;
using CatenaX.NetworkServices.Provisioning.DBAccess.Model;

namespace CatenaX.NetworkServices.Provisioning.DBAccess

{
    public interface IProvisioningDBAccess
    {
        Task<Sequence> GetNextClientSequenceAsync();
        Task<Sequence> GetNextIdentityProviderSequenceAsync();
        Task<IEnumerable<string>> GetBpnForUserAsync(string userId, string bpn = null);
        Task<string> GetIdpAliasFromCompanyIdAsync(string companyId, string idPAlias = null);
    }
}
