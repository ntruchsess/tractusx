using System.Collections.Generic;

namespace CatenaX.NetworkServices.Invitation.Identity.Model
{
    public class CreateClient
    {
        public string ClientId { get; set; }
        public IList<string> RedirectUris { get; set; }
        public string Protocol { get; set; }
        public IDictionary<string,object> Attributes { get; set; }
        public bool FullScopeAllowed { get; set; }
        public IList<CreateClientProtocolMapper> ProtocollMappers { get; set; }
    }
}