using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalDBContext
{
    public partial class CompanyApplicationStatus
    {
        public CompanyApplicationStatus()
        {
            CompanyApplications = new HashSet<CompanyApplication>();
        }

        public int ApplicationStatusId { get; set; }
        public string Label { get; set; }

        public virtual ICollection<CompanyApplication> CompanyApplications { get; set; }
    }
}
