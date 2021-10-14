using CatenaX.NetworkServices.Mockups;
using CatenaX.NetworkServices.Onboarding.Service.Model;

using System.Collections.Generic;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Onboarding.Service.BusinessLogic
{
    public interface IOnboardingBusinessLogic
    {
        Task<Company> GetCompanyByOneId(string oneId);

        Task<List<string>> GetAvailableUserRole(); 

        Task CreateUser(List<User> userList);
    }
}
