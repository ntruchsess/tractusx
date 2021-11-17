using CatenaX.NetworkServices.Onboarding.Service.CDQ.Model;

using System.Collections.Generic;
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

        public async Task<List<FetchBusinessPartnerDto>> FetchBusinessPartner(string companyIdentifier)
        {
            var response = new List<FetchBusinessPartnerDto>();
            var content = JsonSerializer.Serialize(new { cdqId = companyIdentifier });
            var stringContent = new StringContent(content, Encoding.UTF8, "application/json");
            var result = await _httpClient.PostAsync("v3/businesspartners/fetch", stringContent);
            if (result.IsSuccessStatusCode)
            {
                var body = JsonSerializer.Deserialize<FetchBusinessPartnerDto>(await result.Content.ReadAsStringAsync());
                response.Add(body);
                
            }
            else
            {
                var lookupContent = JsonSerializer.Serialize(value: new FetchBusinessPartnerDto { businessPartner = new Businesspartner { names = new[] { new Name { value = companyIdentifier, type = new Type { technicalKey = "DOING_BUSINESS_AS" } } } } });
                var lookupStringContent = new StringContent(lookupContent, Encoding.UTF8, "application/json");
                var fetchRequest = await _httpClient.PostAsync("v3/businesspartners/lookup", lookupStringContent);
                if (fetchRequest.IsSuccessStatusCode)
                {
                    var fetched = JsonSerializer.Deserialize<PaginatedFetchBusinessPartner>(await fetchRequest.Content.ReadAsStringAsync());
                    response.AddRange(fetched.values);
                }
            }
            return response;
        }
    }
}
