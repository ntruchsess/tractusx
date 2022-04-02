using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalDBContext
{
    public partial class CompanyApplication
    {
        public CompanyApplication()
        {
            Invitations = new HashSet<Invitation>();
        }

        public Guid CompanyApplicationId { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateLastChanged { get; set; }
        public int? ApplicationStatusId { get; set; }
        public Guid CompanyId { get; set; }

        public virtual CompanyApplicationStatus ApplicationStatus { get; set; }
        public virtual Company Company { get; set; }
        public virtual ICollection<Invitation> Invitations { get; set; }
    }
}
