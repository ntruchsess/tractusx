using System;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities.Entities
{
    public class AgreementAssignedCompanyRole
    {
        public Guid AgreementId { get; set; }
        public int CompanyRoleId { get; set; }

        public virtual Agreement Agreement { get; set; }
        public virtual CompanyRole CompanyRole { get; set; }
    }
}
