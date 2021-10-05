using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Onboarding.Service.Mail
{
    public interface IMailingService
    {
        Task SendMails(string eMail, string password, string companyName);
    }
}
