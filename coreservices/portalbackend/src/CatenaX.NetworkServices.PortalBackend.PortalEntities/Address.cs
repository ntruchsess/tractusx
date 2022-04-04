using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities
{
    public partial class Address
    {
        public Address()
        {
            Companies = new HashSet<Company>();
        }

        public Guid AddressId { get; set; }
        public DateTime? DateCreated { get; set; }
        public DateTime? DateLastChanged { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string Streetadditional { get; set; }
        public string Streetname { get; set; }
        public string Streetnumber { get; set; }
        public decimal? Zipcode { get; set; }
        public string CountryAlpha2Code { get; set; }

        public virtual Country Country { get; set; }
        public virtual ICollection<Company> Companies { get; set; }
    }
}
