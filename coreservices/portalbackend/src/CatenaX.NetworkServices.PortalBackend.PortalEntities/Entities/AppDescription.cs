using System;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities.Entities
{
    public class AppDescription
    {
        public DateTime? DateCreated { get; set; }
        public DateTime? DateLastChanged { get; set; }
        public string DescriptionLong { get; set; }
        public string DescriptionShort { get; set; }
        public Guid AppId { get; set; }
        public string LanguageShortName { get; set; }

        public virtual App App { get; set; }
        public virtual Language Language { get; set; }
    }
}
