using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalDBContext
{
    public partial class CompanyUserAssignedRole
    {
        public Guid CompanyUserId { get; set; }
        public Guid UserRoleId { get; set; }

        public virtual CompanyUser CompanyUser { get; set; }
        public virtual CompanyUserRole UserRole { get; set; }
    }
}
