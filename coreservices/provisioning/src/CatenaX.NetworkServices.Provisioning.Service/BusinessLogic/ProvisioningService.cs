using System;
using System.Threading.Tasks;
using System.Linq;
using CatenaX.NetworkServices.Provisioning.Keycloak;
using CatenaX.NetworkServices.Provisioning.ActiveDirectory;
using CatenaX.NetworkServices.Provisioning.Mail;

namespace CatenaX.NetworkServices.Provisioning.Service.BusinessLogic
{
    public class ProvisioningService : IProvisioningService
    {
        private readonly IKeycloakAccess _KeycloakAccess;
        private readonly IFederation _Federation;
        private readonly IUserEmail _UserEmail;
        public ProvisioningService(IKeycloakAccess keycloakAccess, IFederation federation, IUserEmail userEmail)
        {
            _KeycloakAccess = keycloakAccess;
            _Federation = federation;
            _UserEmail = userEmail;
        }

        public Task CheckAndExecuteProvisioning()
        {
            return _KeycloakAccess.GetOnboardingRealmGroupsAsync()
                .ContinueWith(taskRealmGroups =>
                    Task.WhenAll(taskRealmGroups.Result.Select(realmGroup => {
                        var (realm,group) = realmGroup;
                        return _Federation.CreateFederation(realm.Id)
                            .ContinueWith(_ =>
                                _KeycloakAccess.GetUsers(realm.Id)
                                    .ContinueWith(taskUsers =>
                                        Task.WhenAll(taskUsers.Result.Select(user => 
                                            _UserEmail.SendMail(user.Email,user.FirstName,user.LastName,realm.Id)
                                        )).Wait()
                                    )
                            ).ContinueWith(_ =>
                                _KeycloakAccess.DeleteGroup(realm.Id,group.Id).Wait()
                            );
                        }
                    )).Wait()
                );
        }
    }
}
