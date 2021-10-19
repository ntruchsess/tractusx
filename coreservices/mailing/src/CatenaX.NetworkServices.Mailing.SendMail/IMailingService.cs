using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Mailing.SendMail
{
    public interface IMailingService
    {
        Task SendMails(string eMail, string password, string companyName);
    }
}
