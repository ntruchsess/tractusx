using CatenaX.NetworkServices.Onboarding.Service.Model;

using System.Collections.Generic;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Onboarding.Service.OnboardingAccess
{
    public interface IOnboardingDBAccess
    {
        Task<IEnumerable<CompanyRole>> GetAllCompanyRoles();
    }
}
