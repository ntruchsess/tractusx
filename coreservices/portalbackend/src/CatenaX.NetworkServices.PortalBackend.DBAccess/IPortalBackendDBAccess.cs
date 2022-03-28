using System.Collections.Generic;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.PortalBackend.DBAccess
{
    public interface IPortalBackendDBAccess
    {
        Task<IEnumerable<string>> GetBpnForUserAsync(string userId, string bpn = null);
        Task<string> GetIdpAliasForCompanyIdAsync(string companyId, string idPAlias = null);
    }
}
