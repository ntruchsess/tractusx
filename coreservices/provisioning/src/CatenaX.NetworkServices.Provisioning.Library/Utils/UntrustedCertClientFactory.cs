using Flurl.Http.Configuration;
using System.Net.Http;

namespace CatenaX.NetworkServices.Provisioning.Library.Utils
{
    public class UntrustedCertClientFactory : DefaultHttpClientFactory
    {
        public override HttpMessageHandler CreateMessageHandler() =>
            new HttpClientHandler { ServerCertificateCustomValidationCallback = (a,b,c,d) => true };
    }
}
