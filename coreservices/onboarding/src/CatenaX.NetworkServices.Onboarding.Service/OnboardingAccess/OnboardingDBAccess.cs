using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

using CatenaX.NetworkServices.Onboarding.Service.Model;

using Dapper;

namespace CatenaX.NetworkServices.Onboarding.Service.OnboardingAccess
{
    public class OnboardingDBAccess : IOnboardingDBAccess
    {
        private readonly IDbConnection _dbConnection;

        public OnboardingDBAccess(IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
        }

        public async Task<IEnumerable<CompanyRole>> GetAllCompanyRoles()
        {
            string sql = "SELECT * from public.companyroles";

            using (_dbConnection)
            {
                var result = await _dbConnection.QueryAsync<CompanyRole>(sql);
                return result;
            }
        }

    }
}
