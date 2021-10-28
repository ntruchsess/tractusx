using CatenaX.NetworkServices.Onboarding.Service.CDQ.Model;

using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Onboarding.Service.CDQ
{
    public class CDQAccess : ICDQAccess
    {
        private readonly HttpClient _httpClient;

        public CDQAccess(IHttpClientFactory _httpFactory)
        {
            _httpClient = _httpFactory.CreateClient("cdq");
        }

        public async Task<FetchBusinessPartnerDto> FetchBusinessPartner(string cdqId)
        {
            var content = JsonSerializer.Serialize(new { cdqId = cdqId });
            var stringContent = new StringContent(content, Encoding.UTF8, "application/json");
            var result = await _httpClient.PostAsync("v3/businesspartners/fetch", stringContent);
            if (result.IsSuccessStatusCode)
            {
                return JsonSerializer.Deserialize<FetchBusinessPartnerDto>(await result.Content.ReadAsStringAsync());
            }
            return null;
        }
    }
}
