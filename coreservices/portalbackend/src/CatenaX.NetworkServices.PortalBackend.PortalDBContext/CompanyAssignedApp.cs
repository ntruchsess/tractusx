using System;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalDBContext
{
    public partial class CompanyAssignedApp
    {
        public Guid CompanyId { get; set; }
        public Guid AppId { get; set; }

        public virtual App App { get; set; }
        public virtual Company Company { get; set; }
    }
}
