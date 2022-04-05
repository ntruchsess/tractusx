using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities.Entities
{
    public class Country
    {
        public Country()
        {
            Addresses = new HashSet<Address>();
        }

        public string CountryNameEn { get; set; }
        public string Alpha2Code { get; set; }
        public string Alpha3Code { get; set; }
        public string CountryNameDe { get; set; }

        public virtual ICollection<Address> Addresses { get; set; }
    }
}
