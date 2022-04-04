using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities
{
    public partial class IdentityProviderCategory
    {
        public IdentityProviderCategory()
        {
            IdentityProviders = new HashSet<IdentityProvider>();
        }

        public IdentityProviderCategoryId IdentityProviderCategoryId { get; set; }
        public string Label { get; set; }

        public virtual ICollection<IdentityProvider> IdentityProviders { get; set; }
    }
}
