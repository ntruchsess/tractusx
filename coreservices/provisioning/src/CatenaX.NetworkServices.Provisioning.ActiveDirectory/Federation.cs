using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Text;
using System.Text.Json;

using CatenaX.NetworkServices.Provisioning.ActiveDirectory.Model;
using CatenaX.NetworkServices.Provisioning.Utils;

namespace CatenaX.NetworkServices.Provisioning.ActiveDirectory
{
    public class Federation : IFederation
    {
        public const string ConfigPosition = "ActiveDirectory:Federation";
        private readonly HttpClient _Client;
        private readonly FederationSettings _Settings;
        private readonly IClientToken _Token;
        private readonly StringTemplate _RequestUriTemplate;
        private readonly StringTemplate _IssuerUriTemplate;
        private readonly StringTemplate _DisplayNameTemplate;
        private readonly StringTemplate _MetadataExchangeUriTemplate;
        private readonly StringTemplate _PassiveSignInUriTemplate;
        private readonly IList<StringTemplate> _DomainIdTemplates;
        private readonly StringTemplate _SigningCertificateTemplate;

        public Federation(IOptions<FederationSettings> federationSettings, IClientToken clientToken, IHttpClientFactory clientFactory)
        {
            _Settings = federationSettings.Value;
            _Token = clientToken;
            _Client = clientFactory.CreateClient();
            _RequestUriTemplate = new StringTemplate(_Settings.RequestUri);
            _IssuerUriTemplate = new StringTemplate(_Settings.Request.IssuerUri);
            _DisplayNameTemplate = new StringTemplate(_Settings.Request.DisplayName);
            _MetadataExchangeUriTemplate = new StringTemplate(_Settings.Request.MetadataExchangeUri);
            _PassiveSignInUriTemplate = new StringTemplate(_Settings.Request.PassiveSignInUri);
            _DomainIdTemplates = _Settings.Request.DomainIds.Select(id => new StringTemplate(id)).ToList();
            _SigningCertificateTemplate = new StringTemplate(_Settings.Request.SigningCertificate);
        }

        public async Task<bool> CreateFederation(IDictionary<string,string> values)
        {
            var token = await _Token.GetToken();
            var domainFederation = new SamlOrWsFedExternalDomainFederation {
                ODataType = _Settings.Request.ODataType,
                IssuerUri = _IssuerUriTemplate.Apply(values),
                DisplayName = _DisplayNameTemplate.Apply(values),
                MetadataExchangeUri = _MetadataExchangeUriTemplate.Apply(values),
                PassiveSignInUri = _PassiveSignInUriTemplate.Apply(values),
                PreferredAuthenticationProtocol = _Settings.Request.PreferredAuthenticationProtocol,
                Domains = _DomainIdTemplates.Select(template =>
                    new ExternalDomainName {
                        ODataType = _Settings.Request.DomainODataType,
                        Id = template.Apply(values)
                    }).ToList(),
                SigningCertificate = _SigningCertificateTemplate.Apply(values)
            };

            var content = JsonSerializer.Serialize(domainFederation);
            var request = new HttpRequestMessage(HttpMethod.Post, new Uri(_RequestUriTemplate.Apply(values)));
            request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            request.Headers.Authorization = new AuthenticationHeaderValue(token.Type,token.Value);
            request.Content = new StringContent(content, Encoding.UTF8);
            request.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

            return (await _Client.SendAsync(request)).IsSuccessStatusCode;
        }
    }
}
