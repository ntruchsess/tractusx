using CatenaX.NetworkServices.Mockups;
using CatenaX.NetworkServices.Onboarding.Service.Model;

using System.Collections.Generic;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Onboarding.Service.BusinessLogic
{
    public class OnboardingBusinessLogic : IOnboardingBusinessLogic
    {
        private List<string> roles = new List<string> { "Invitation", "IT Admin", "Legal Admin", "Signing Manager" };

        public Task CreateUser(List<User> userList)
        {
            throw new System.NotImplementedException();
        }

        public Task<List<string>> GetAvailableUserRole()
        {
            return Task.FromResult(UserRoles.Roles);
        }

        public Task<Company> GetCompanyByOneId(string oneId)
        {
            var query = new QueryCompany();
            return Task.FromResult(query.Query(oneId));
        }
    }
}
