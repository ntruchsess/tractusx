using System;
using System.Collections.Generic;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities.Entities
{
    public class Language
    {
        public Language()
        {
            AppDescriptions = new HashSet<AppDescription>();
        }

        public string LanguageShortName { get; set; }
        public string LongNameDe { get; set; }
        public string LongNameEn { get; set; }

        public virtual ICollection<AppDescription> AppDescriptions { get; set; }
    }
}
