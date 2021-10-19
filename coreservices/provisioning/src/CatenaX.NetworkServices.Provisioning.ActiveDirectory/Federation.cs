using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;

using CatenaX.NetworkServices.Provisioning.ActiveDirectory.Model;

namespace CatenaX.NetworkServices.Provisioning.ActiveDirectory
{
    public class Federation : IFederation
    {
        static readonly HttpClient client = new HttpClient();
        private FederationSettings _Settings;
        private IClientToken _Token;
        public Federation(IOptions<FederationSettings> federationSettings, IClientToken clientToken)
        {
            _Settings = federationSettings.Value;
            _Token = clientToken;
        }

        public async Task CreateFederation(string realm)
        {
            var values = new Dictionary<string,string>{
                { "realm", realm },
                { "id", _Settings.Id },
                { "cert", _Settings.Cert }
            };
            var token = await _Token.GetToken();
            var domainFederation = new SamlOrWsFedExternalDomainFederation {
                ODataType = replaceValues(_Settings.Request.ODataType,values),
                IssuerUri = replaceValues(_Settings.Request.IssuerUri,values),
                DisplayName = replaceValues(_Settings.Request.DisplayName,values),
                MetadataExchangeUri = replaceValues(_Settings.Request.MetadataExchangeUri,values),
                PassiveSignInUri = replaceValues(_Settings.Request.PassiveSignInUri,values),
                PreferredAuthenticationProtocol = replaceValues(_Settings.Request.PreferredAuthenticationProtocol,values),
                Domains = _Settings.Request.Domains.Aggregate(new List<ExternalDomainName>(),(y,z) => {
                    y.Add(new ExternalDomainName {
                        ODataType = replaceValues(z.ODataType,values),
                        Id = replaceValues(z.Id,values)
                    });
                    return y;
                }),
                SigningCertificate = replaceValues(_Settings.Request.SigningCertificate,values)
            };

            var content = JsonSerializer.Serialize(domainFederation);
            var request = new HttpRequestMessage(HttpMethod.Post, new Uri(replaceValues(_Settings.RequestUri,values)));
            request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            request.Headers.Authorization = new AuthenticationHeaderValue(token.Type,token.Value);
            request.Content = new StringContent(content, Encoding.UTF8);
            request.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

            var response = await client.SendAsync(request);
            response.EnsureSuccessStatusCode();

            var responseContent = await response.Content.ReadAsStringAsync();
        }

        private string replaceValues(string template, IDictionary<string,string> parameters)
        {
            return Regex.Replace(
                template,
                @"\{(\w+)\}", //replaces any text surrounded by { and }
                m =>
                {
                    string value;
                    return parameters.TryGetValue(m.Groups[1].Value, out value) ? value : "null";
                }
            );
        }
    }
}
