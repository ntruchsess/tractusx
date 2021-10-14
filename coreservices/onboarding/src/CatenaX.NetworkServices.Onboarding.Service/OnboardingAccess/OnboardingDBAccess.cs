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

        public async Task SetCompanyRoles(CompanyToRoles rolesToSet)
        {
            using (_dbConnection)
            {
                foreach (var role in rolesToSet.roles)
                {
                    var parameters = new { roleId = role, companyId = rolesToSet.CompanyId };
                    string sql = "Insert Into public.company_selected_roles (company_id, role_id) values(@companyId, @roleId)";


                    await _dbConnection.ExecuteAsync(sql, parameters);

                }
            }
        }
    }
}
