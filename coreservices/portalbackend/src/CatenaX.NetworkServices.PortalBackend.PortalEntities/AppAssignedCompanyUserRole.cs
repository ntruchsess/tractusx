using System;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities
{
    public partial class AppAssignedCompanyUserRole
    {
        public Guid AppId { get; set; }
        public Guid? CompanyUserRoleId { get; set; }

        public virtual App App { get; set; }
        public virtual CompanyUserRole CompanyUserRole { get; set; }
    }
}
