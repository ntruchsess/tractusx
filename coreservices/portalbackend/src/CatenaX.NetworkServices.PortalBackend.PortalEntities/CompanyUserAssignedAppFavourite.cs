using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities
{
    public partial class CompanyUserAssignedAppFavourite
    {
        public Guid CompanyUserId { get; set; }
        public Guid AppId { get; set; }

        public virtual App App { get; set; }
        public virtual CompanyUser CompanyUser { get; set; }
    }
}
