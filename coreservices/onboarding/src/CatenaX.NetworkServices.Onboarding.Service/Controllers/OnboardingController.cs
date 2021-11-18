using CatenaX.NetworkServices.Cosent.Library.Data;
using CatenaX.NetworkServices.Mockups;
using CatenaX.NetworkServices.Onboarding.Service.BusinessLogic;
using CatenaX.NetworkServices.Onboarding.Service.Model;

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
        private readonly IOnboardingBusinessLogic _onboardingBusinessLogic;

        public OnboardingController(ILogger<OnboardingController> logger, IHttpClientFactory clientFactory, IOnboardingBusinessLogic onboardingBusinessLogic)
        {
            _logger = logger;
            _httpClient = clientFactory.CreateClient("keycloak");
            _onboardingBusinessLogic = onboardingBusinessLogic;
        }

        [HttpGet]
        [Route("company/{realm}/{oneId}")]
        [ProducesResponseType(typeof(Company), (int)HttpStatusCode.OK)]
        public Task<IActionResult> GetOneObject([FromRoute] string realm, [FromRoute] string oneId, [FromHeader] string authorization)
        {
            return ValidateTokenAsync(realm, authorization, async () => {
                var result = await _onboardingBusinessLogic.GetCompanyByOneId(oneId);
                return new OkObjectResult(result);
            });
        }

        [HttpPost]
        [Route("company/{realm}/users")]
        public Task<IActionResult> CreateUsers([FromRoute] string realm, [FromHeader] string authorization, [FromBody] List<User> userToCreate)
        {
            return ValidateTokenAsync(realm, authorization, async () => {
                await _onboardingBusinessLogic.CreateUsers(userToCreate, realm, authorization.Split(" ")[1]);
                return new OkResult();
            });
        }

        [HttpPut]
        [Route("company/{realm}/companyRoles")]
        public Task<IActionResult> SetCompanyRoles([FromRoute] string realm, [FromHeader] string authorization, [FromBody] CompanyToRoles rolesToSet)
        {
            return ValidateTokenAsync(realm, authorization, async () => {
                await _onboardingBusinessLogic.SetCompanyRoles(rolesToSet);
                return new OkResult();
            });
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<CompanyRole>), (int)HttpStatusCode.OK)]
        [Route("company/{realm}/companyRoles")]
        public Task<IActionResult> GetCompanyRoles([FromRoute] string realm, [FromHeader] string authorization)
        {
            return ValidateTokenAsync(realm, authorization, async () => {
                var companyRoles = await _onboardingBusinessLogic.GetCompanyRoles();
                return new OkObjectResult(companyRoles);
            });
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<ConsentForCompanyRole>), (int)HttpStatusCode.OK)]
        [Route("company/{realm}/consentsFoCompanyRole/{roleId}")]
        public Task<IActionResult> GetCompanyRoles([FromRoute] string realm, [FromHeader] string authorization, int roleId)
        {
            return ValidateTokenAsync(realm, authorization, async () => {
                var consentforCompanyRoles = await _onboardingBusinessLogic.GetConsentForCompanyRole(roleId);
                return new OkObjectResult(consentforCompanyRoles);
            });
        }

        [HttpGet]
        [Route("company/{realm}/signedConsentsByCompanyId/{companyId}")]
        [ProducesResponseType(typeof(List<SignedConsent>), (int)HttpStatusCode.OK)]
        public Task<IActionResult> SignedConsentsByCompanyId([FromRoute] string realm, [FromHeader] string authorization, string companyId)
        {
            return ValidateTokenAsync(realm, authorization, async () => {
                var signedConsents = await _onboardingBusinessLogic.SignedConsentsByCompanyId(companyId);
                return new OkObjectResult(signedConsents);
            });
        }

        [HttpPut]
        [Route("company/{realm}/signConsent")]
        public Task<IActionResult> SignConsent([FromRoute] string realm, [FromHeader] string authorization, [FromBody] SignConsentRequest signConsentRequest)
        {
            return ValidateTokenAsync(realm, authorization, async () => {
                await _onboardingBusinessLogic.SignConsent(signConsentRequest);
                return new OkResult();
            });
        }

        [HttpPut]
        [Route("company/{realm}/idp")]
        public Task<IActionResult> SetIdp([FromRoute] string realm, [FromHeader] string authorization, [FromBody] SetIdp idpToSet)
        {
            return ValidateTokenAsync(realm, authorization, async () => {
                await _onboardingBusinessLogic.SetIdp(idpToSet);
                return new OkResult();
            });
        }

        [HttpPut]
        [Route("company/{realm}/finishOnboarding")]
        public Task<IActionResult> FinishOnboarding([FromRoute] string realm, [FromHeader] string authorization)
        {
            return ValidateTokenAsync(realm, authorization, async () => {
                await _onboardingBusinessLogic.FinishOnboarding(authorization.Split(" ")[1],realm);
                return new OkResult();
            });
        }

        [HttpGet]
        [Route("company/{realm}/userRoles")]
        [ProducesResponseType(typeof(List<string>), (int)HttpStatusCode.OK)]
        public Task<IActionResult> GetUserRoles([FromRoute] string realm, [FromHeader] string authorization)
        {
            return ValidateTokenAsync(realm, authorization, async () => {
                var userRoles = await _onboardingBusinessLogic.GetAvailableUserRole();
                return new OkObjectResult(userRoles);
            });
        }

        private delegate Task<IActionResult> ValidatedAction();
        private delegate Task<IActionResult> ValidatedUserInfoAction(HttpResponseMessage userInfoResponse);

        private Task<IActionResult> ValidateTokenAsync(string realm, string authorization, ValidatedAction action)
        {
            return ValidateTokenAsync(realm, authorization, _ => action());
        }
        
        private async Task<IActionResult> ValidateTokenAsync(string realm, string authorization, ValidatedUserInfoAction action)
        {
            var token = "";
            try
            {
                token = authorization.Split(" ")[1];
            }
            catch
            {
                return new StatusCodeResult((int)HttpStatusCode.Forbidden);
            }
            _httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);
            var response = await _httpClient.GetAsync($"{realm}/protocol/openid-connect/userinfo");
            if (!response.IsSuccessStatusCode)
            {
                return new StatusCodeResult((int)HttpStatusCode.Forbidden);
            }
            // TODO: Get User Name and E-Mail from Token and pass to action(..)
            //var userInfo = result.Content.ReadAsStringAsync().Result;
            return await action(response);
        }
    }
}
