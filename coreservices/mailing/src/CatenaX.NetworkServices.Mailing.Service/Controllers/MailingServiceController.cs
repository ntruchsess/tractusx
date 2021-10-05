using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CatenaX.NetworkServices.Mailing.Service.BusinessLogic;
using CatenaX.NetworkServices.Mailing.Service.Model;
using CatenaX.NetworkServices.Mailing.Template;

namespace CatenaX.NetworkServices.Mailing.Service.Controllers
{
    [ApiController]
    [Route("api/mailservice")]
    public class MailingServiceController : ControllerBase
    {
        private readonly ILogger<MailingServiceController> _logger;
        private readonly IMailingServiceBusinessLogic _logic;

        public MailingServiceController(ILogger<MailingServiceController> logger, IMailingServiceBusinessLogic logic)
        {
            _logger = logger;
            _logic = logic;
        }

        [HttpPost]
        [Route("send/{template}")]
        public async Task<IActionResult> SendMail([FromRoute]string template, [FromBody] MailServiceParameters parameters)
        {
            try
            {
                await _logic.SendMail(template, parameters.Sender, parameters.Recipient, parameters.Parameters);
                return new OkResult();
            }
            catch(NoSuchTemplateException)
            {
                _logger.LogError("template {0} not found",template);
                return new StatusCodeResult((int)HttpStatusCode.NotFound);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex.ToString());
                return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
            }
        }
    }
}
