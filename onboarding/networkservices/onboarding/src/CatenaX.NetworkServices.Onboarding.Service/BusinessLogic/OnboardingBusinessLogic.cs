using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using CatenaX.NetworkServices.Onboarding.Identity;

namespace CatenaX.NetworkServices.Onboarding.Service.BusinessLogic
{
    public class OnboardingBusinessLogic : IOnboardingBusinessLogic
    {
        private readonly IIdentityManager _identityManager;

        public OnboardingBusinessLogic(IIdentityManager identityManager)
        {
            _identityManager = identityManager;
        }
        public Task ExecuteOnboarding(string identifier)
        {
            throw new NotImplementedException();
            //Access Database to get Data

            //Create Realm and Admin User

            //Create Additional Users
        }
    }
}
