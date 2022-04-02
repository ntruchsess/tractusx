using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalDBContext
{
    public partial class AgreementCategory
    {
        public AgreementCategory()
        {
            Agreements = new HashSet<Agreement>();
        }

        public int AgreementCategoryId { get; set; }
        public string Label { get; set; }

        public virtual ICollection<Agreement> Agreements { get; set; }
    }
}
