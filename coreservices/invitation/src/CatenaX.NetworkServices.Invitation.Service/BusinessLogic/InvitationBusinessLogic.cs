using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using CatenaX.NetworkServices.Invitation.Identity;
using CatenaX.NetworkServices.Invitation.Identity.Model;
using CatenaX.NetworkServices.Invitation.Library;
using CatenaX.NetworkServices.Invitation.Service.DataAccess;
using CatenaX.NetworkServices.Invitation.Service.Mail;

namespace CatenaX.NetworkServices.Invitation.Service.BusinessLogic
{
    public class InvitationBusinessLogic : IInvitationBusinessLogic
    {
        private readonly IIdentityManager _identityManager;
        private readonly IMailingService _mailingService;
        //private readonly IDataAccess _dataAccess;

        private List<string> Groups = new List<string> {"Invitation", "IT Admin", "Legal Admin", "Signing Manager" };

        public InvitationBusinessLogic(IIdentityManager identityManager, IMailingService mailingService)
        {
            _identityManager = identityManager;
            _mailingService = mailingService;
            //_dataAccess = dataAccess;
        }

        public async Task ExecuteInvitation(string identifier)
        {
        //    var result = await _dataAccess.GetData(int.Parse(identifier));

            //Create Realm and Admin User

            //Create Additional Users
        }

        public async Task StartInvitation(InvitationData InvitationData)
        {
            //Get Data From Member
            var query = new QueryCompany();

            var company = query.Query(InvitationData.OneId);

            var realmName = company.name1;

            var newRealm = new CreateRealm
            {
                Name = realmName
            };

            await _identityManager.CreateRealm(newRealm);

            var newClient = new CreateClient
            {
                ClientId = "urn:federation:MicrosoftOnline",
                RedirectUris = new List<string>{
                    "https://login.microsoftonline.com/login.srf"
                },
                Protocol = "saml",
                Attributes = new Dictionary<string,object>{
                    { "saml.assertion.signature", true },
                    { "saml.signing.certificate", "MIIC/TCCAeWgAwIBAgIQN/GPegnT8blP2EcSdMMbBzANBgkqhkiG9w0BAQsFADApMScwJQYDVQQDEx5MaXZlIElEIFNUUyBTaWduaW5nIFB1YmxpYyBLZXkwHhcNMjEwMjE4MDAwMDAwWhcNMjYwMjE4MDAwMDAwWjApMScwJQYDVQQDEx5MaXZlIElEIFNUUyBTaWduaW5nIFB1YmxpYyBLZXkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDXdLGU2Ll5RPdDUnKQ+f/HS5qiTay2cCh9U2AS6oDM6SOxVhYGtoeJ1VPebcLnpgLfhPxzrwWoVzXSEF+VRQbnYID2Jb4khjgyEeoThk3VqrThwhahpSbBg2vo06vIOp1TS2R1BiwHKTLoB1i1IJnaIFSC3BN6pY4flXWyLQt/5ABXElv2XZLqXM9Eefj6Ji40nLIsiW4dWw3BDa/ywWW0MsiW5ojGq4vovcAgENe/4NUbju70gHP/WS5D9bW5p+OIQi7/unrlWe/h3A6jtBbbRlXYXlN+Z22uTTyyCD/W8zeXaACLvHagwEMrQePDXBZqc/iX2kI+ooZr1sC/H39RAgMBAAGjITAfMB0GA1UdDgQWBBSrX2dm3LwT9jb/p+bAAdYQpE+/NjANBgkqhkiG9w0BAQsFAAOCAQEAeqJfYHnsA9qhGttXFfFpPW4DQLh5w6JCce7vGvWINr5fr1DnQdcOr+wwjQ/tqbckAL2v6z1AqjhS78kbfegnAQDwioJZ1olYYvLOxKoa6HF+b1/p0Mlub8Zukk2n1b2lKPBBOibOasSY7gQDwlIZi7tl9nMTxUfdYK+E5Axv7DVnmUCwcnnpV5/1SFdNyW2kWO4C68rrjMOvECfwrKkbfVJM8f9krEUBuoBF8dTDv7D2ZM4Q2buC70NbfaNWUX0yFvKI0IuTqk8RBfGTRQ4fZAbhMPaykEpBu6dNjTi5YOa0lNqFGS7Ax7leCh5x9lV8elcLkXs8ySo8AOQJk0hgIw==" },
                    { "saml.signature.algorithm", "RSA_SHA256" },
                    { "saml_single_logout_service_url_post", "https://login.microsoftonline.com/login.srf" },
                    { "saml.client.signature", false },
                    { "saml.authnstatement", true },
                    { "saml_assertion_consumer_url_post", "https://login.microsoftonline.com/login.srf" },
                    { "saml_name_id_format", "persistent" },
                    { "saml.server.signature", true },
                    { "saml.server.signature.keyinfo.ext", false }
                },
                FullScopeAllowed = true,
                ProtocollMappers = new List<CreateClientProtocolMapper>
                {
                    new CreateClientProtocolMapper {
                        Name = "emailaddress",
                        Protocol = "saml",
                        ProtocolMapper = "saml-user-property-mapper",
                        ConsentRequired = false,
                        Config = new Dictionary<string,object> {
                            { "user.attribute", "email" },
                            { "friendly.name", "emailaddress" },
                            { "attribute.name", "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress" }
                        }
                    }
                }
            };

            await _identityManager.CreateClient(realmName, newClient);

            foreach (string group in Groups)
            {
                var newGroup = new CreateGroup {
                    Name = group
                };
                await _identityManager.CreateGroup(realmName, newGroup);
            }

            var newUser = new CreateUser
            {
                UserName = InvitationData.EMail,
                Email = InvitationData.EMail,
                Groups = new List<string> { "Invitation" }
            };

            var password = await _identityManager.CreateUser(realmName, newUser);

            await _mailingService.SendMails(InvitationData.EMail, password, realmName);
        }
    }

}
