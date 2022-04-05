using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities.Entities
{
    public class App
    {
        public App()
        {
            Agreements = new HashSet<Agreement>();
            AppDescriptions = new HashSet<AppDescription>();
            Companies = new HashSet<Company>();
            CompanyUserRoles = new HashSet<CompanyUserRole>();
            AppLicenses = new HashSet<AppLicense>();
            UseCases = new HashSet<UseCase>();
            CompanyUsers = new HashSet<CompanyUser>();
        }

        public Guid AppId { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateLastChanged { get; set; }
        public string Name { get; set; }
        public DateTime? DateReleased { get; set; }
        public string ThumbnailUrl { get; set; }
        public Guid? VendorCompanyId { get; set; }

        public virtual Company VendorCompany { get; set; }
        public virtual ICollection<Company> Companies { get; set; }

        public virtual ICollection<Agreement> Agreements { get; set; }
        public virtual ICollection<AppDescription> AppDescriptions { get; set; }
        public virtual ICollection<CompanyUserRole> CompanyUserRoles { get; set; }
        public virtual ICollection<AppLicense> AppLicenses { get; set; }
        public virtual ICollection<UseCase> UseCases { get; set; }
        public virtual ICollection<CompanyUser> CompanyUsers { get; set; }
    }
}
