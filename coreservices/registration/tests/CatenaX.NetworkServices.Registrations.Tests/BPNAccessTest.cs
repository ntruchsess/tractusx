using AutoFixture;

using CatenaX.NetworkServices.Registration.Service.BPN;
using CatenaX.NetworkServices.Registration.Service.BPN.Model;
using CatenaX.NetworkServices.Registration.Service.CustomException;

using NSubstitute;

using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

using Xunit;

namespace CatenaX.NetworkServices.Registrations.Tests
{

    public class MockHttpMessageHandler : HttpMessageHandler
    {
        public FetchBusinessPartnerDto returnData { get; set; }
        public HttpStatusCode returnStatusCode { get; set; }

        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            var response = new HttpResponseMessage(returnStatusCode);
            response.Content = new StringContent(JsonSerializer.Serialize(returnData));
            return Task.FromResult(response);

        }

    }

    public class BPNAccessTest
    {
        [Fact]
        public async Task FetchBusinessPartner_Success()
        {
            var messageHandler = new MockHttpMessageHandler();

            var fixture = new Fixture();
            var resultSet = fixture.Create<FetchBusinessPartnerDto>();
            messageHandler.returnData = resultSet;
            messageHandler.returnStatusCode = HttpStatusCode.OK;
            var httpClientFactory = Substitute.For<IHttpClientFactory>();

            var httpClient = new HttpClient(messageHandler) { BaseAddress = new Uri("http://localhost") };
            httpClientFactory.CreateClient("bpn").Returns(httpClient);

            var sut = new BPNAccess(httpClientFactory);

            var result = await sut.FetchBusinessPartner("testpbn", "token");
            Assert.Equal(resultSet.bpn, result.First().bpn);
            Assert.Equal("token", httpClient.DefaultRequestHeaders.Authorization.Parameter);
        }

        [Fact]
        public async Task FetchBusinessPartner_Failure()
        {
            var messageHandler = new MockHttpMessageHandler();

            var fixture = new Fixture();
            var resultSet = fixture.Create<FetchBusinessPartnerDto>();
            messageHandler.returnStatusCode = HttpStatusCode.InternalServerError;

            var httpClientFactory = Substitute.For<IHttpClientFactory>();

            var httpClient = new HttpClient(messageHandler) { BaseAddress = new Uri("http://localhost") };
            httpClientFactory.CreateClient("bpn").Returns(httpClient);

            var sut = new BPNAccess(httpClientFactory);

            await Assert.ThrowsAsync<ServiceException>(async () => await sut.FetchBusinessPartner("testpbn", "token"));
            Assert.Equal("token", httpClient.DefaultRequestHeaders.Authorization.Parameter);
        }
    }
}
