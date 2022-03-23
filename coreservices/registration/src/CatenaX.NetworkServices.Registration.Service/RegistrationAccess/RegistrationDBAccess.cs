using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using CatenaX.NetworkServices.Cosent.Library.Data;
using CatenaX.NetworkServices.Registration.Service.Model;

using Dapper;

namespace CatenaX.NetworkServices.Registration.Service.RegistrationAccess
{
    public class RegistrationDBAccess : IRegistrationDBAccess, IDisposable
    {
        private readonly IDbConnection _dbConnection;

        public RegistrationDBAccess(IDbConnection dbConnection)
        {
            _dbConnection = dbConnection;
        }

        public void Dispose()
        {
            _dbConnection.Dispose();
        }

        public async Task<IEnumerable<CompanyRole>> GetAllCompanyRoles()
        {
            string sql = "SELECT * from public.companyroles";
            var result = await _dbConnection.QueryAsync<CompanyRole>(sql);
            return result;
        }

        public async Task<IEnumerable<ConsentForCompanyRole>> GetConsentForCompanyRole(int roleId)
        {
            var sql = $"select * from get_company_role({roleId})";
            return await _dbConnection.QueryAsync<ConsentForCompanyRole>(sql);
        }

        public async Task SetCompanyRoles(CompanyToRoles rolesToSet)
        {
            foreach (var role in rolesToSet.roles)
            {
                var parameters = new { roleId = role, companyId = rolesToSet.CompanyId };
                string sql = "Insert Into public.company_selected_roles (company_id, role_id) values(@companyId, @roleId)";
                await _dbConnection.ExecuteAsync(sql, parameters);

            }
        }

        public async Task SetIdp(SetIdp idpToSet)
        {
            var parameters = new { companyId = idpToSet.companyId, idp = idpToSet.idp };
            string sql = "Insert Into public.company_selected_idp (company_id, idp) values(@companyId, @idp)";
            await _dbConnection.ExecuteAsync(sql, parameters);
        }

        public async Task SignConsent(SignConsentRequest signedConsent)
        {
            var sql = $"SELECT sign_consent('{signedConsent.companyId}',{signedConsent.consentId},{signedConsent.companyRoleId}, '{signedConsent.userName}')";
            await _dbConnection.ExecuteAsync(sql);
        }

        public async Task<IEnumerable<SignedConsent>> SignedConsentsByCompanyId(string companyId)
        {
            var sql = $"select * from get_signed_consents_for_company_id('{companyId}')";
            return await _dbConnection.QueryAsync<SignedConsent>(sql);
        }

        public async Task UploadDocument(string name, string document, string hash, string username)
        {
            var parameters = new { documentName = name, document = document, documentHash = hash, documentuser = username, documentuploaddate = DateTime.UtcNow };
            string sql = "Insert Into public.documents (documentName, document, documentHash, documentuser, documentuploaddate) values(@documentName, @document, @documentHash, @documentuser, @documentuploaddate)";
            await _dbConnection.ExecuteAsync(sql, parameters);
        }
    }
}
