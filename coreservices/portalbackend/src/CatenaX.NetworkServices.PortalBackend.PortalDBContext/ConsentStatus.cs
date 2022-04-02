using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalDBContext
{
    public partial class ConsentStatus
    {
        public ConsentStatus()
        {
            Consents = new HashSet<Consent>();
        }

        public int ConsentStatusId { get; set; }
        public string Label { get; set; }

        public virtual ICollection<Consent> Consents { get; set; }
    }
}
