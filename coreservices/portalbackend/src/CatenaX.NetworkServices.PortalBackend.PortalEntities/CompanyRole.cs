using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities
{
    public partial class CompanyRole
    {
        public CompanyRole()
        {
            Companies = new HashSet<Company>();
        }

        public int CompanyRoleId { get; set; }
        public string CompanyRole1 { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateLastChanged { get; set; }
        public string NameDe { get; set; }
        public string NameEn { get; set; }
        public virtual AgreementAssignedCompanyRole AgreementAssignedCompanyRole { get; set; }
        public virtual ICollection<Company> Companies { get; set; }
    }
}
