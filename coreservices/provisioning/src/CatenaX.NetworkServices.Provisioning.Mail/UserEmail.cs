using System.Collections.Generic;
using System.Threading.Tasks;

using Microsoft.Extensions.Options;

using CatenaX.NetworkServices.Mailing.SendMail;
using CatenaX.NetworkServices.Mailing.Template;

namespace CatenaX.NetworkServices.Provisioning.Mail
{
    public class UserEmail : IUserEmail
    {
        public static readonly string ProviderPosition = "MailingService:Provider";
        public static readonly string TemplatePosition = "MailingService:Templates";
        public static readonly string UserEmailPosition = "MailingService:UserEmail";
        private readonly UserEmailSettings _settings;
        private readonly ITemplateManager _templateManager;
        private readonly ISendMail _sendMail;

        public UserEmail( ITemplateManager templateManager, ISendMail sendMail, IOptions<UserEmailSettings> settings)
        {
            _templateManager = templateManager;
            _sendMail = sendMail;
            _settings = settings.Value;
        }

        public Task SendMail(string email, string firstName, string lastName, string realm)
        {
            var templateParams = new Dictionary<string, string> {
                { "firstname", firstName },
                { "lastname", lastName },
                { "realm", realm }
            };
            var inviteMail = _templateManager.ApplyTemplate(_settings.Template, templateParams);
            return _sendMail.Send(_settings.SenderEmail, email, inviteMail.Subject, inviteMail.Body, inviteMail.isHtml);
        }
    }
}
