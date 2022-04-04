using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities
{
    public partial class CompanyUserRole
    {
        public CompanyUserRole()
        {
            Apps = new HashSet<App>();
            CompanyUsers = new HashSet<CompanyUser>();
        }

        public Guid CompanyUserRoleId { get; set; }
        public string CompanyUserRole1 { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateLastChanged { get; set; }
        public string Namede { get; set; }
        public string Nameen { get; set; }
        public virtual ICollection<App> Apps { get; set; }
        public virtual ICollection<CompanyUser> CompanyUsers { get; set; }
    }
}
