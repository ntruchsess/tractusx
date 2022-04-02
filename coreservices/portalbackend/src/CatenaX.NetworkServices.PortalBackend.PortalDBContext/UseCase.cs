using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalDBContext
{
    public partial class UseCase
    {
        public UseCase()
        {
            Agreements = new HashSet<Agreement>();
            Companies = new HashSet<Company>();
            Apps = new HashSet<App>();
        }

        public Guid UseCaseId { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateLastChanged { get; set; }
        public string Name { get; set; }
        public string Shortname { get; set; }

        public virtual ICollection<Agreement> Agreements { get; set; }
        public virtual ICollection<Company> Companies { get; set; }
        public virtual ICollection<App> Apps { get; set; }
    }
}
