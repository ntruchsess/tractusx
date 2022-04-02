using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalDBContext
{
    public partial class IdentityProvider
    {
        public IdentityProvider()
        {
            Companies = new HashSet<Company>();
        }

        public int IdentityProviderCategoryId { get; set; }
        public Guid IdentityProviderId { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateLastChanged { get; set; }

        public virtual IdentityProviderCategory IdentityProviderCategory { get; set; }
        public virtual IamIdentityProvider IamIdentityProvider { get; set; }
        public virtual ICollection<Company> Companies { get; set; }
    }
}
