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

        Task<List<CompanyRole>> GetCompanyRoles();

        Task CreateUsers(List<User> userList, string realm, string token);

        Task SetCompanyRoles(CompanyToRoles rolesToSet);
    }
}
