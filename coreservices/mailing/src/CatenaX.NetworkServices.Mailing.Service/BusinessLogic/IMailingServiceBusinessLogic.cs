using System.Collections.Generic;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Mailing.Service.BusinessLogic
{
    public interface IMailingServiceBusinessLogic
    {
        public Task SendMail(string template, string sender, string recipient, IDictionary<string,string> parameters);
    }
}
