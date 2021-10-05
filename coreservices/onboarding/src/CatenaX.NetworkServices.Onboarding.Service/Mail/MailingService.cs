using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using CatenaX.NetworkServices.Mailing.Service.Model;

namespace CatenaX.NetworkServices.Onboarding.Service.Mail
{
    public class MailingService : IMailingService
    {
        private readonly HttpClient _client;

        public MailingService(IHttpClientFactory clientFactory)
        {
            _client = clientFactory.CreateClient("mailingClient");
        }

        public async Task SendMails(string eMail, string password, string companyName)
        {
            var userNameMail = new MailServiceParameters {
                Recipient = eMail,
                Sender = "Notifications@catena-x.net",
                Parameters = new Dictionary<string, string> { { "companyname", companyName } }
            };

            var content = new StringContent(JsonSerializer.Serialize(userNameMail), UnicodeEncoding.UTF8, "application/json");
            await _client.PostAsync("api/mailservice/send/invite", content);

            var passwordMail = new MailServiceParameters
            {
                Recipient = eMail,
                Sender = "Notifications@catena-x.net",
                Parameters = new Dictionary<string, string> { { "password", password } }
            };

            var passwordContent = new StringContent(JsonSerializer.Serialize(passwordMail), UnicodeEncoding.UTF8, "application/json");
            await _client.PostAsync("api/mailservice/send/password", passwordContent);
        }
    }
}
