using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalDBContext
{
    public partial class Invitation
    {
        public Guid InvitationId { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateLastChanged { get; set; }
        public int InvitationStatusId { get; set; }
        public Guid? CompanyApplicationId { get; set; }
        public Guid CompanyUserId { get; set; }

        public virtual CompanyApplication CompanyApplication { get; set; }
        public virtual CompanyUser CompanyUser { get; set; }
        public virtual InvitationStatus InvitationStatus { get; set; }
    }
}
