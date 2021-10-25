using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using CatenaX.NetworkServices.Provisioning.Keycloak;
using CatenaX.NetworkServices.Provisioning.ActiveDirectory;
using CatenaX.NetworkServices.Provisioning.Mail;
using Keycloak.Net.Models.Users;
namespace CatenaX.NetworkServices.Provisioning.Service.BusinessLogic
{
    public class ProvisioningService : IProvisioningService
    {
        public static readonly string ConfigPosition = "Provisioning";
        private readonly IKeycloakAccess _KeycloakAccess;
        private readonly IFederation _Federation;
        private readonly IUserEmail _UserEmail;
        private readonly ProvisioningSettings _Settings;
        public ProvisioningService(IKeycloakAccess keycloakAccess, IFederation federation, IUserEmail userEmail, IOptions<ProvisioningSettings> settings)
        {
            _KeycloakAccess = keycloakAccess;
            _Federation = federation;
            _UserEmail = userEmail;
            _Settings = settings.Value;
        }

        public Task CheckAndExecuteProvisioningAsync()
        {
            return _KeycloakAccess.GetOnboardingRealmGroupsAsync(_Settings.TriggerGroup)
                .ContinueWith(taskRealmGroups =>
                    Task.WhenAll(taskRealmGroups.Result.Select(realmGroup => {
                        var (realm,group) = realmGroup;
                        return _KeycloakAccess.GetSamlDescriptorCertAsync(realm._Realm)
                            .ContinueWith(taskCert =>
                                _Federation.CreateFederationAsync(new Dictionary<string,string>{
                                    { "realm", realm._Realm },
                                    { "base", _Settings.DomainBase },
                                    { "cert", taskCert.Result }
                                }))
                            .Unwrap().ContinueWith(taskCreateFederation =>
                                (taskCreateFederation.IsCompletedSuccessfully && taskCreateFederation.Result)
                                    ? _KeycloakAccess.DeleteGroupAsync(realm._Realm,group.Id)
                                    : Task.FromResult(false))
                            .Unwrap().ContinueWith(taskDeleteGroup =>
                                (taskDeleteGroup.IsCompletedSuccessfully && taskDeleteGroup.Result)
                                    ? _KeycloakAccess.GetUsersAsync(realm._Realm)
                                    : Task.FromResult((IEnumerable<User>)null))
                            .Unwrap().ContinueWith(taskGetUsers =>
                                (taskGetUsers.IsCompletedSuccessfully && taskGetUsers.Result != null)
                                    ? Task.WhenAll(taskGetUsers.Result.Select(user =>
                                        _Federation.SendInvitationAsync(user.UserName)
                                            .ContinueWith(taskSendInvitation =>
                                                (taskSendInvitation.IsCompletedSuccessfully && taskSendInvitation.Result)
                                                    ? _UserEmail.SendMailAsync(user.UserName,user.FirstName,user.LastName,realm._Realm)
                                                    : (Task)null
                                            ).Unwrap()
                                        ))
                                    : (Task)null)
                            .Unwrap();
                    }))).Unwrap();
        }
    }
}
