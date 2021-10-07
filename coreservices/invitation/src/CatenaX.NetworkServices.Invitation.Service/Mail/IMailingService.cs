using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Invitation.Service.Mail
{
    public interface IMailingService
    {
        Task SendMails(string eMail, string password, string companyName);
    }
}
