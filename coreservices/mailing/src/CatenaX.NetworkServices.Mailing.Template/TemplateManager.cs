using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using CatenaX.NetworkServices.Mailing.Template.Model;

namespace CatenaX.NetworkServices.Mailing.Template
{
    public class TemplateManager : ITemplateManager
    {
        private readonly IDictionary<string,MailTemplate> _Templates = new Dictionary<string,MailTemplate>();

        public TemplateManager()
        {
            _Templates.Add("invite", new MailTemplate("invite", "invitation to Catena-X", "your company {companyname} is hereby invited to participate in Catena-X"));
            _Templates.Add("password", new MailTemplate("password", "password for onboarding to Catena-X", "please use this password to onboard to Catena-X: {password}"));
        }

        Mail ITemplateManager.ApplyTemplate(string id, IDictionary<string, string> parameters)
        {
            try
            {
                var Template = _Templates[id];
                return new Mail(
                    replaceValues(Template.Subject,parameters),
                    replaceValues(Template.Body,parameters)
                );
            }
            catch(ArgumentNullException)
            {
                throw new NoSuchTemplateException(id);
            }
            catch(KeyNotFoundException)
            {
                throw new NoSuchTemplateException(id);
            }
        }

        private string replaceValues(string template, IDictionary<string,string> parameters)
        {
            return Regex.Replace(
                template,
                @"\{(\w+)\}", //replaces any text surrounded by { and }
                m =>
                {
                    string value;
                    return parameters.TryGetValue(m.Groups[1].Value, out value) ? value : "null";
                }
            );
        }
    }
}
