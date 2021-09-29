using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using CatenaX.NetworkServices.Onboarding.Library;

namespace CatenaX.NetworkServices.Onboarding.Service.BusinessLogic
{
    public interface IOnboardingBusinessLogic
    {
        Task ExecuteOnboarding(string identifier);

        Task StartOnboarding(OnboardingData onboardingData);
    }
}
