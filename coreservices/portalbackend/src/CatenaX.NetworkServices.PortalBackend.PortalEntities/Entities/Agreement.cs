using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities.Entities
{
    public class Agreement
    {
        public Agreement()
        {
            Consents = new HashSet<Consent>();
            AgreementAssignedCompanyRoles = new HashSet<AgreementAssignedCompanyRole>();
            AgreementAssignedDocumentTemplates = new HashSet<AgreementAssignedDocumentTemplate>();
        }

        public int AgreementCategoryId { get; set; }
        public Guid AgreementId { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateLastChanged { get; set; }
        public string AgreementType { get; set; }
        public string Name { get; set; }
        public Guid? AppId { get; set; }
        public Guid IssuerCompanyId { get; set; }
        public Guid? UseCaseId { get; set; }

        public virtual AgreementCategory AgreementCategory { get; set; }
        public virtual App App { get; set; }
        public virtual Company IssuerCompany { get; set; }
        public virtual UseCase UseCase { get; set; }
        public virtual ICollection<Consent> Consents { get; set; }
        public virtual ICollection<AgreementAssignedCompanyRole> AgreementAssignedCompanyRoles { get; set; }
        public virtual ICollection<AgreementAssignedDocumentTemplate> AgreementAssignedDocumentTemplates { get; set; }
    }
}
