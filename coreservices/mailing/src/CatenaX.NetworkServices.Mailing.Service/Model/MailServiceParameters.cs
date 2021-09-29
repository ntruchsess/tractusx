using System.Collections.Generic;

namespace CatenaX.NetworkServices.Mailing.Service.Model
{
    public class MailServiceParameters
    {
        public string Recipient { get; set; }
        public string Sender { get; set; }
        public IDictionary<string,string> Parameters { get; set; }
    }
}
