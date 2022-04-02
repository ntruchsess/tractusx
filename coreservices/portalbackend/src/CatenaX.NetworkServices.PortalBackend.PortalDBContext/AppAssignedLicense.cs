using System;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalDBContext
{
    public partial class AppAssignedLicense
    {
        public Guid AppId { get; set; }
        public Guid AppLicenseId { get; set; }

        public virtual App App { get; set; }
        public virtual AppLicense AppLicense { get; set; }
    }
}
