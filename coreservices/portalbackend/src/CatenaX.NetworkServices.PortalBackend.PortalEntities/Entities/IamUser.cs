using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities.Entities
{
    public class IamUser
    {
        public Guid IamUserId { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateLastChanged { get; set; }
        public Guid CompanyUserId { get; set; }

        public virtual CompanyUser CompanyUser { get; set; }
    }
}
