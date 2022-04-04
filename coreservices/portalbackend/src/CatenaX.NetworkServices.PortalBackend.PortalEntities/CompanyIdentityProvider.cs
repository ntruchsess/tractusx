using System;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities
{
    public partial class CompanyIdentityProvider
    {
        public Guid CompanyId { get; set; }
        public Guid IdentityProviderId { get; set; }

        public virtual Company Company { get; set; }
        public virtual IdentityProvider IdentityProvider { get; set; }
    }
}
