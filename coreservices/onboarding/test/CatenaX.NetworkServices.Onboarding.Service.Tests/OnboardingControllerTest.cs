using System;
using System.Net;
using System.Threading.Tasks;

using CatenaX.NetworkServices.Onboarding.Service.BusinessLogic;
using CatenaX.NetworkServices.Onboarding.Service.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging.Abstractions;

using NSubstitute;
using NSubstitute.ExceptionExtensions;

using Xunit;

namespace CatenaX.NetworkServices.Onboarding.Service.Tests
{
    public class OnboardingControllerTest
    {
        [Fact]
        public async Task ExecuteOnboarding_ReturnsInternalServerError_OnException()
        {
            //Setup
            var onboardingBusinessLogic = Substitute.For<IOnboardingBusinessLogic>(); 
            onboardingBusinessLogic.ExecuteOnboarding(Arg.Is("testIdent")).Throws<ArgumentException>();
            var sut = new OnboardingController(NullLogger<OnboardingController>.Instance, onboardingBusinessLogic);
            
            //Execute
            var result = await sut.ExecuteOnboarding("testIdent");
            Assert.IsType<StatusCodeResult>(result);
            var statusCodeResult = result as StatusCodeResult;
            Assert.Equal(((int)HttpStatusCode.InternalServerError).ToString(), statusCodeResult.StatusCode.ToString());
        }
    }
}
