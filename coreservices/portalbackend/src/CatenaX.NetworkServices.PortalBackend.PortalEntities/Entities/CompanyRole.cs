using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities.Entities
{
    public class CompanyRole : BaseEntity
    {
        public CompanyRole(string companyRoleText, string nameDe, string nameEn)
        {
            Companies = new HashSet<Company>();
            CompanyRoleText = companyRoleText;
            NameDe = nameDe;
            NameEn = nameEn;
        }

        [MaxLength(255)]
        public string CompanyRoleText { get; set; }

        [MaxLength(255)]
        public string NameDe { get; set; }

        [MaxLength(255)]
        public string NameEn { get; set; }


        public virtual AgreementAssignedCompanyRole? AgreementAssignedCompanyRole { get; set; }
        public virtual ICollection<Company> Companies { get; set; }
    }
}
