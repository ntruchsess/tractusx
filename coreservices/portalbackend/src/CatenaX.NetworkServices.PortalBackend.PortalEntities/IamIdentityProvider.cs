using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities
{
    public partial class IamIdentityProvider
    {
        public Guid IdentityProviderId { get; set; }
        public string IamIdpAlias { get; set; }

        public virtual IdentityProvider IdentityProvider { get; set; }
    }
}
