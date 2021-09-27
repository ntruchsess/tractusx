using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Onboarding.Service.BusinessLogic
{
    public interface IOnboardingBusinessLogic
    {
        Task ExecuteOnboarding(string identifier);
    }
}
