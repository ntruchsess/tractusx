using CatenaX.NetworkServices.PortalBackend.PortalEntities.Enums;
using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities.Entities
{
    public class IdentityProviderCategory
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
