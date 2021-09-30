using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using CatenaX.NetworkServices.Onboarding.Identity;
using CatenaX.NetworkServices.Onboarding.Identity.Model;
using CatenaX.NetworkServices.Onboarding.Library;
using CatenaX.NetworkServices.Onboarding.Service.DataAccess;

namespace CatenaX.NetworkServices.Onboarding.Service.BusinessLogic
{
    public class OnboardingBusinessLogic : IOnboardingBusinessLogic
    {
        private readonly IIdentityManager _identityManager;
        //private readonly IDataAccess _dataAccess;

        private List<string> Groups = new List<string> {"Onboarding", "IT Admin", "Legal Admin", "Signing Manager" };

        public OnboardingBusinessLogic(IIdentityManager identityManager)
        {
            _identityManager = identityManager;
            //_dataAccess = dataAccess;
        }

        public async Task ExecuteOnboarding(string identifier)
        {
        //    var result = await _dataAccess.GetData(int.Parse(identifier));

            //Create Realm and Admin User

            //Create Additional Users
        }

        public async Task StartOnboarding(OnboardingData onboardingData)
        {
            //Get Data From Member
            var query = new QueryCompany();

            var company = query.Query(onboardingData.OneId);

            var realmName = company.name1;

            var newRealm = new CreateRealm
            {
                Name = realmName
            };

            await _identityManager.CreateRealm(newRealm);

            

            foreach(string group in Groups)
            {
                var newGroup = new CreateGroup {
                    Name = group
                };
                await _identityManager.CreateGroup(realmName, newGroup);
            }

            var newUser = new CreateUser
            {
                UserName = onboardingData.EMail,
                Email = onboardingData.EMail,
                Groups = new List<string> { "Onboarding" }
            };

            await _identityManager.CreateUser(realmName, newUser);
        }
    }

}
