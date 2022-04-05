using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities.Entities
{
    public class Document
    {
        public Document()
        {
            Consents = new HashSet<Consent>();
        }

        public Guid DocumentId { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateLastChanged { get; set; }
        public uint DocumentOid { get; set; } // FIXME: What is this good for?
        public string Documenthash { get; set; }
        public string Documentname { get; set; }
        public byte[] Documentuploaddate { get; set; }
        public string Documentversion { get; set; }
        public Guid? CompanyUserId { get; set; }

        public virtual CompanyUser CompanyUser { get; set; }
        public virtual ICollection<Consent> Consents { get; set; }
    }
}
