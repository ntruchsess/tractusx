using System;
using System.Threading.Tasks;
using MimeKit;
using MailKit.Net.Smtp;

namespace CatenaX.NetworkServices.Mailing.SendMail
{
    public class SendMail : ISendMail
    {
        Task ISendMail.Send(string sender, string recipient, string subject, string body)
        {
            var message = new MimeMessage();
            message.From.Add(MailboxAddress.Parse(sender));
            message.To.Add(MailboxAddress.Parse(recipient));
            message.Subject = subject;
            message.Body    = new TextPart("plain") { Text = body };
            return _send(message);
        }

        private async Task _send(MimeMessage message)
        {
            var client = new SmtpClient();
            await client.ConnectAsync("smtp.office365.com", 587);
            await client.AuthenticateAsync("Notifications@catena-x.net", "ghdfsauejb+34#");
            await client.SendAsync(message);
            await client.DisconnectAsync(true);
        }
    }
}
