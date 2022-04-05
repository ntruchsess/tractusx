using CatenaX.NetworkServices.PortalBackend.PortalEntities.Enums;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities.Entities
{
    public class CompanyApplicationStatus
    {
        public CompanyApplicationStatus()
        {
            CompanyApplications = new HashSet<CompanyApplication>();
        }

        public CompanyApplicationStatusId ApplicationStatusId { get; set; }
        public string Label { get; set; }

        public virtual ICollection<CompanyApplication> CompanyApplications { get; set; }
    }
}
