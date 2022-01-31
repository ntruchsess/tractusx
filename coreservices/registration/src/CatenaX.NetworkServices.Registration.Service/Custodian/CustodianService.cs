using CatenaX.NetworkServices.Registration.Service.Custodian.Models;

using Microsoft.Extensions.DependencyInjection;

using Org.BouncyCastle.Bcpg;

using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Registration.Service.Custodian
{
    public class CustodianService : ICustodianService
    {
        private readonly CustodianSettings _settings;
        private readonly HttpClient _custodianHttpClient;
        private readonly HttpClient _custodianAuthHttpClient;

        public CustodianService(IHttpClientFactory httpFactory, CustodianSettings settings)
        {
            _settings = settings;
            _custodianHttpClient = httpFactory.CreateClient("custodian");
            _custodianAuthHttpClient = httpFactory.CreateClient("custodianAuth");
        }


        public async Task CreateWallet(string bpn, string name)
        {
            var token = await GetToken();
            _custodianHttpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
        }

        public async Task<List<GetWallets>> GetCompanies()
        {
            var token = await GetToken();
            _custodianHttpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
            throw new System.NotImplementedException();
        }

        public async Task<string> GetToken()
        {
            var parameters = new Dictionary<string, string>();
            parameters.Add("username", _settings.Custodian_Username);
            parameters.Add("password", _settings.Custodian_Password);
            parameters.Add("client_id", _settings.Custodian_ClientId);
            parameters.Add("grant_type", _settings.Custodian_GrantType);
            parameters.Add("client_secret", _settings.Custodian_ClientSecret);
            parameters.Add("scope", _settings.Custodian_Scope);
            var content = new FormUrlEncodedContent(parameters);
            var response = await _custodianAuthHttpClient.PostAsync("", content);
            if (!response.IsSuccessStatusCode)
            {
                throw new Exception("Token could not be retrieved");
            }
            var responseObject = JsonSerializer.Deserialize<AuthResponse>(await response.Content.ReadAsStringAsync());
            return responseObject.access_token;
        }
    }
}
