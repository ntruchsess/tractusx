using System;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities.Entities
{
    public class DocumentTemplate
    {
        public Guid DocumentTemplateId { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateLastChanged { get; set; }
        public string Documenttemplatename { get; set; }
        public string Documenttemplateversion { get; set; }
        public virtual AgreementAssignedDocumentTemplate AgreementAssignedDocumentTemplate { get; set; }
    }
}
