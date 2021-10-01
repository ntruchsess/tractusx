using System.Collections.Generic;
using System.Threading.Tasks;
using CatenaX.NetworkServices.Mailing.Template;
using CatenaX.NetworkServices.Mailing.SendMail;

namespace CatenaX.NetworkServices.Mailing.Service.BusinessLogic
{
    public class MailingServiceBusinessLogic : IMailingServiceBusinessLogic
    {
        private readonly ITemplateManager _TemplateManager;
        private readonly ISendMail _SendMail;
        public MailingServiceBusinessLogic(ITemplateManager templateManager, ISendMail sendMail)
        {
            _TemplateManager = templateManager;
            _SendMail = sendMail;
        }
        Task IMailingServiceBusinessLogic.SendMail(string template, string sender, string recipient, IDictionary<string, string> parameters)
        {
            var mail = _TemplateManager.ApplyTemplate(template,parameters);
            return _SendMail.Send(sender,recipient,mail.Subject,mail.Body);
        }
    }
}
