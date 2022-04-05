using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities.Entities
{
    public class CompanyUser
    {
        public CompanyUser()
        {
            Consents = new HashSet<Consent>();
            Documents = new HashSet<Document>();
            Invitations = new HashSet<Invitation>();
            Apps = new HashSet<App>();
            CompanyUserRoles = new HashSet<CompanyUserRole>();
        }

        public Guid CompanyUserId { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateLastChanged { get; set; }
        public string Email { get; set; }
        public string Firstname { get; set; }
        public byte[] Lastlogin { get; set; }
        public string Lastname { get; set; }
        public Guid CompanyId { get; set; }

        public virtual Company Company { get; set; }
        public virtual IamUser IamUser { get; set; }
        public virtual ICollection<Consent> Consents { get; set; }
        public virtual ICollection<Document> Documents { get; set; }
        public virtual ICollection<Invitation> Invitations { get; set; }
        public virtual ICollection<App> Apps { get; set; }
        public virtual ICollection<CompanyUserRole> CompanyUserRoles { get; set; }
    }
}
