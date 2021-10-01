namespace CatenaX.NetworkServices.Mailing.Template.Model
{
    public class Mail
    {
        public Mail(string subject, string body)
        {
            Subject = subject;
            Body = body;
        }
        public string Subject { get; }
        public string Body { get; }
    }
}
