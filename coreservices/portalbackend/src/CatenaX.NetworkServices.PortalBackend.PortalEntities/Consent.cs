using System;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities
{
    public partial class Consent
    {
        public Guid ConsentId { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateLastChanged { get; set; }
        public string Comment { get; set; }
        public int ConsentStatusId { get; set; }
        public string Target { get; set; }
        public byte[] Timestamp { get; set; }
        public Guid AgreementId { get; set; }
        public Guid CompanyId { get; set; }
        public Guid? DocumentsId { get; set; }
        public Guid CompanyUserId { get; set; }
        public virtual Agreement Agreement { get; set; }
        public virtual Company Company { get; set; }
        public virtual CompanyUser CompanyUser { get; set; }
        public virtual ConsentStatus ConsentStatus { get; set; }
        public virtual Document Documents { get; set; }
    }
}
