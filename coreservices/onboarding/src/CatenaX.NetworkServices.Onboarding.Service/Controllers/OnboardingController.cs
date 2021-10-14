using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Onboarding.Service.Controllers
{
    [ApiController]
    [Route("api/onboarding")]
    public class OnboardingController : ControllerBase
    {

        private readonly ILogger<OnboardingController> _logger;
        private readonly HttpClient _httpClient;

        public OnboardingController(ILogger<OnboardingController> logger, IHttpClientFactory clientFactory)
        {
            _logger = logger;
            _httpClient = clientFactory.CreateClient("keycloak");
        }

        [HttpGet]
        [Route("company/{realm}/{oneId}")]
        public async Task <IActionResult> GetOneObject([FromRoute] string realm, [FromRoute] string oneId, [FromHeader] string authorization)
        {
            
            if(!ValidateTokenAsync(realm, authorization, out var response))
            {
                return response;
            }
            else
            {
                return new OkResult();
            }


            
        }

        private bool ValidateTokenAsync(string realm, string authorization, out IActionResult response)
        {
            _httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", authorization);
            var result =  _httpClient.GetAsync($"{realm}/protocol/openid-connect/userinfo").Result;
            if (result.IsSuccessStatusCode)
            {
                response = null;
                return true;
            }
            response =  new StatusCodeResult((int)HttpStatusCode.Forbidden);
            return false;
        }
    }
}
