using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

using CatenaX.NetworkServices.Onboarding.Library;
using CatenaX.NetworkServices.Onboarding.Service.BusinessLogic;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CatenaX.NetworkServices.Onboarding.Service.Controllers
{
    [ApiController]
    [Route("api/onboarding")]
    public class OnboardingController : ControllerBase
    {

        private readonly ILogger<OnboardingController> _logger;
        private readonly IOnboardingBusinessLogic _logic;

        public OnboardingController(ILogger<OnboardingController> logger, IOnboardingBusinessLogic logic)
        {
            _logger = logger;
            _logic = logic;
        }

        [HttpPut]
        [Route("execute/{identifier}")]
        public async Task<IActionResult> ExecuteOnboarding(string identifier)
        {
            try
            {
                await _logic.ExecuteOnboarding(identifier);
                return new OkResult();
            } catch(Exception e)
            {
                _logger.LogError(e.ToString());
                return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpPost]
        public async Task<IActionResult> ExecuteOnboarding([FromBody] OnboardingData onboardingData)
        {
            try
            {
                await _logic.StartOnboarding(onboardingData);
                return new OkResult();
            }
            catch (Exception e)
            {
                _logger.LogError(e.ToString());
                return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
            }
        }
    }
}
