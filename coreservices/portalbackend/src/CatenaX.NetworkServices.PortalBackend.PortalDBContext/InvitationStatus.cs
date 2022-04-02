using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalDBContext
{
    public partial class InvitationStatus
    {
        public InvitationStatus()
        {
            Invitations = new HashSet<Invitation>();
        }

        public int InvitationStatusId { get; set; }
        public string Label { get; set; }

        public virtual ICollection<Invitation> Invitations { get; set; }
    }
}
