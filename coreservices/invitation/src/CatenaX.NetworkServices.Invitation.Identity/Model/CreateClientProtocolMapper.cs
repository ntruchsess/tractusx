using System.Collections.Generic;

namespace CatenaX.NetworkServices.Invitation.Identity.Model
{
    public class CreateClientProtocolMapper
    {
        public string Name;
        public string Protocol;
        public string ProtocolMapper;
        public bool ConsentRequired;
        public IDictionary<string,object> Config;
    }
}
