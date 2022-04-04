using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.PortalBackend.DBAccess
{
    public interface IPortalBackendDBAccess
    {
        Task<IEnumerable<string>> GetBpnForUserAsync(Guid userId, string bpn = null);
        Task<string> GetIdpAliasForCompanyIdAsync(Guid companyId, string idPAlias = null);
    }
}
