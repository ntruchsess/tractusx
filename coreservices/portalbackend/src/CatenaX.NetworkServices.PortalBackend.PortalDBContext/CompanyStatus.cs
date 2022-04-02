using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalDBContext
{
    public partial class CompanyStatus
    {
        public CompanyStatus()
        {
            Companies = new HashSet<Company>();
        }

        public int CompanyStatusId { get; set; }
        public string Label { get; set; }

        public virtual ICollection<Company> Companies { get; set; }
    }
}
