using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Provisioning.Mail
{
    public interface IUserEmail
    {
        Task SendMail(string email, string firstName, string lastName, string realm);
    }
}
