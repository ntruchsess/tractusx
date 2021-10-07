using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

using CatenaX.NetworkServices.Mailing.SendMail;
using CatenaX.NetworkServices.Mailing.Template;

namespace CatenaX.NetworkServices.Invitation.Service.Mail
{
    public class MailingService : IMailingService
    {
        private readonly ITemplateManager _templateManager;
        private readonly ISendMail _sendMail;

        public MailingService( ITemplateManager templateManager, ISendMail sendMail)
        {
            _templateManager = templateManager;
            _sendMail = sendMail;
        }

        public async Task SendMails(string eMail, string password, string companyName)
        {
            var inviteParams = new Dictionary<string, string> { { "companyname", companyName } };
            var inviteMail = _templateManager.ApplyTemplate("invite", inviteParams);
            await _sendMail.Send("Notifications@catena-x.net", eMail, inviteMail.Subject, inviteMail.Body);

            var pwParams = new Dictionary<string, string> { { "password", password } };
            var pwMail = _templateManager.ApplyTemplate("password", pwParams);
            await _sendMail.Send("Notifications@catena-x.net", eMail, pwMail.Subject, pwMail.Body);

        }
    }
}
