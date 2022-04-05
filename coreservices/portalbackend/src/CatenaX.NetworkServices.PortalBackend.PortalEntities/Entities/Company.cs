using CatenaX.NetworkServices.PortalBackend.PortalEntities.Enums;
using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities.Entities
{
    public class Company
    {
        public Company()
        {
            Agreements = new HashSet<Agreement>();
            BoughtApps = new HashSet<App>();
            ProvidedApps = new HashSet<App>();
            CompanyApplications = new HashSet<CompanyApplication>();
            IdentityProviders = new HashSet<IdentityProvider>();
            CompanyUsers = new HashSet<CompanyUser>();
            Consents = new HashSet<Consent>();
            CompanyRoles = new HashSet<CompanyRole>();
            UseCases = new HashSet<UseCase>();
        }

        public Guid CompanyId { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateLastChanged { get; set; }
        public string Bpn { get; set; }
        public string Name { get; set; }
        public string Parent { get; set; }
        public string Shortname { get; set; }
        public CompanyStatusId? CompanyStatusId { get; set; }
        public Guid? AddressId { get; set; }

        public virtual ICollection<App> ProvidedApps { get; set; }
        public virtual ICollection<App> BoughtApps { get; set; }

        public virtual Address Address { get; set; }
        public virtual CompanyStatus CompanyStatus { get; set; }
        public virtual ICollection<Agreement> Agreements { get; set; }
        public virtual ICollection<CompanyApplication> CompanyApplications { get; set; }
        public virtual ICollection<IdentityProvider> IdentityProviders { get; set; }
        public virtual ICollection<CompanyUser> CompanyUsers { get; set; }
        public virtual ICollection<Consent> Consents { get; set; }
        public virtual ICollection<CompanyRole> CompanyRoles { get; set; }
        public virtual ICollection<UseCase> UseCases { get; set; }
    }
}
