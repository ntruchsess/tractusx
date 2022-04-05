using System;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities.Entities
{
    public class CompanyAssignedRole
    {
        public Guid CompanyId { get; set; }
        public int CompanyRoleId { get; set; }

        public virtual Company Company { get; set; }
        public virtual CompanyRole CompanyRole { get; set; }
    }
}
