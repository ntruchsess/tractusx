using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalDBContext
{
    public partial class IdentityProviderCategory
    {
        public IdentityProviderCategory()
        {
            IdentityProviders = new HashSet<IdentityProvider>();
        }

        public int IdentityProviderCategoryId { get; set; }
        public string Label { get; set; }

        public virtual ICollection<IdentityProvider> IdentityProviders { get; set; }
    }
}
