using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.EntityFrameworkCore.ChangeTracking;

using CatenaX.NetworkServices.Framework.DBAccess;
using CatenaX.NetworkServices.PortalBackend.PortalEntities;
using CatenaX.NetworkServices.PortalBackend.PortalEntities.Enums;
using CatenaX.NetworkServices.PortalBackend.PortalEntities.Entities;

namespace CatenaX.NetworkServices.PortalBackend.DBAccess

{
    public class PortalBackendDBAccess : IPortalBackendDBAccess
    {
        private readonly IDBConnectionFactory _DBConnection;
        private readonly string _dbSchema;
        private readonly PortalDBContext _dbContext;

        public PortalBackendDBAccess(IDBConnectionFactories dbConnectionFactories, PortalDBContext dbContext)
           : this(dbConnectionFactories.Get("Portal"))
        {
            _dbContext = dbContext;
        }

        public PortalBackendDBAccess(IDBConnectionFactory dbConnectionFactory)
        {
            _DBConnection = dbConnectionFactory;
            _dbSchema = dbConnectionFactory.Schema();
        }

        public async Task<IEnumerable<string>> GetBpnForUserAsync(Guid userId, string bpn = null)
        {
            if (userId == null)
            {
                throw new ArgumentNullException(nameof(userId));
            }
            string sql =
                    $@"SELECT bpn
                    FROM {_dbSchema}.company_users u JOIN {_dbSchema}.companies comp
                    ON u.company_id = comp.company_id
                    JOIN {_dbSchema}.iam_users i
                    ON u.company_user_id = i.company_user_id
                    WHERE i.iam_user_id = @userId" +
                    (bpn == null ? "" : " AND comp.bpn = @bpn");
            using (var connection = _DBConnection.Connection())
            {
                var bpnResult = (await connection.QueryAsync<string>(sql, new {
                        userId,
                        bpn
                    }).ConfigureAwait(false));
                if (!bpnResult.Any())
                {
                    throw new InvalidOperationException("BPN not found");
                }
                return bpnResult;
            }
        }

        public async Task<string> GetIdpAliasForCompanyIdAsync(Guid companyId, string idpAlias = null)
        {
            if (companyId == null)
            {
                throw new ArgumentNullException(nameof(companyId));
            }
            string sql =
                    $@"SELECT i.iam_idp_alias
                    FROM {_dbSchema}.company_identity_provider c
                    JOIN {_dbSchema}.iam_identity_providers i
                    ON c.identity_provider_id = i.identity_provider_id
                    WHERE c.company_id = @companyId" +
                    (idpAlias == null ? "" : " AND i.iam_idp_alias = @idpAlias");
            using (var connection = _DBConnection.Connection())
            {
                var idpAliasResult = (await connection.QuerySingleAsync<string>(sql, new {
                        companyId,
                        idpAlias
                    }).ConfigureAwait(false));
                if (String.IsNullOrEmpty(idpAliasResult))
                {
                    throw new InvalidOperationException("idpAlias not found");
                }
                return idpAliasResult;
            }
        }

        public Company CreateCompany(string companyName)
        {
            return _dbContext.Companies.Add(new Company {
                CompanyId = Guid.NewGuid(),
                Name = companyName,
                Shortname = companyName,
                CompanyStatusId = CompanyStatusId.PENDING
            }).Entity;
        }

        public CompanyApplication CreateCompanyApplication(Company company)
        {
            return _dbContext.CompanyApplications.Add(new CompanyApplication {
                CompanyApplicationId = Guid.NewGuid(),
                ApplicationStatusId = CompanyApplicationStatusId.ADD_COMPANY_DATA,
                Company = company
            }).Entity;
        }

        public CompanyUser CreateCompanyUser(string firstName, string lastName, string email, Company company)
        {
            return _dbContext.CompanyUsers.Add(new CompanyUser {
                CompanyUserId = Guid.NewGuid(),
                Firstname = firstName,
                Lastname = lastName,
                Email = email,
                Company = company
            }).Entity;
        }

        public Invitation CreateInvitation(CompanyApplication application, CompanyUser user)
        {
            return _dbContext.Invitations.Add(new Invitation {
                InvitationId = Guid.NewGuid(),
                InvitationStatusId = InvitationStatusId.CREATED,
                CompanyApplication = application,
                CompanyUser = user
            }).Entity;
        }

        public IdentityProvider CreateSharedIdentityProvider(Company company)
        {
            var idp = new IdentityProvider() {
                IdentityProviderId = Guid.NewGuid(),
                IdentityProviderCategoryId = IdentityProviderCategoryId.KEYCLOAK_SHARED,
            };
            idp.Companies.Add(company);
            return _dbContext.IdentityProviders.Add(idp).Entity;
        }

        public IamIdentityProvider CreateIamIdentityProvider(IdentityProvider identityProvider, string idpAlias)
        {
            return _dbContext.IamIdentityProviders.Add(new IamIdentityProvider {
                IdentityProvider = identityProvider,
                IamIdpAlias = idpAlias
            }).Entity;
        }

        public IamUser CreateIamUser(CompanyUser user, Guid iamUserId)
        {
            return _dbContext.IamUsers.Add(new IamUser {
                CompanyUser = user,
                IamUserId = iamUserId
            }).Entity;
        }

        public Task<int> Save()
        {
            return _dbContext.SaveChangesAsync();
        }
    }
}
