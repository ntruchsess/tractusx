using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using CatenaX.NetworkServices.Invitation.Identity;
using CatenaX.NetworkServices.Invitation.Identity.Model;
using CatenaX.NetworkServices.Invitation.Library;
using CatenaX.NetworkServices.Invitation.Service.DataAccess;
using CatenaX.NetworkServices.Invitation.Service.Mail;

namespace CatenaX.NetworkServices.Invitation.Service.BusinessLogic
{
    public class InvitationBusinessLogic : IInvitationBusinessLogic
    {
        private readonly IIdentityManager _identityManager;
        private readonly IMailingService _mailingService;
        //private readonly IDataAccess _dataAccess;

        private List<string> Groups = new List<string> {"Invitation", "IT Admin", "Legal Admin", "Signing Manager" };

        public InvitationBusinessLogic(IIdentityManager identityManager, IMailingService mailingService)
        {
            _identityManager = identityManager;
            _mailingService = mailingService;
            //_dataAccess = dataAccess;
        }

        public async Task ExecuteInvitation(string identifier)
        {
        //    var result = await _dataAccess.GetData(int.Parse(identifier));

            //Create Realm and Admin User

            //Create Additional Users
        }

        public async Task StartInvitation(InvitationData InvitationData)
        {
            //Get Data From Member
            var query = new QueryCompany();

            var company = query.Query(InvitationData.OneId);

            var realmName = company.name1;

            var newRealm = new CreateRealm
            {
                Name = realmName
            };

            await _identityManager.CreateRealm(newRealm);



            foreach (string group in Groups)
            {
                var newGroup = new CreateGroup {
                    Name = group
                };
                await _identityManager.CreateGroup(realmName, newGroup);
            }

            var newUser = new CreateUser
            {
                UserName = InvitationData.EMail,
                Email = InvitationData.EMail,
                Groups = new List<string> { "Invitation" }
            };

            var password = await _identityManager.CreateUser(realmName, newUser);

            await _mailingService.SendMails(InvitationData.EMail, password, realmName);
        }
    }

}
