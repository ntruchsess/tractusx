using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities
{
    public partial class AppLicense
    {
        public AppLicense()
        {
            Apps = new HashSet<App>();
        }
        
        public Guid AppLicenseId { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateLastChanged { get; set; }
        public string Licensetext { get; set; }
        public virtual ICollection<App> Apps { get; set; }
    }
}
