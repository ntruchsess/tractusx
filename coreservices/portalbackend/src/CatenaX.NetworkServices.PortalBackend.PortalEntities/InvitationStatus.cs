using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities
{
    public partial class InvitationStatus
    {
        public InvitationStatus()
        {
            Invitations = new HashSet<Invitation>();
        }

        public InvitationStatusId InvitationStatusId { get; set; }
        public string Label { get; set; }

        public virtual ICollection<Invitation> Invitations { get; set; }
    }
}
