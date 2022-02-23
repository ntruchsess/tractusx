using System;
using System.Net;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using CatenaX.NetworkServices.Invitation.Service.BusinessLogic;

namespace CatenaX.NetworkServices.Invitation.Service.Controllers
{
    [ApiController]
    public class InvitationController : ControllerBase
    {

        private readonly ILogger<InvitationController> _logger;
        private readonly IInvitationBusinessLogic _logic;

        public InvitationController(ILogger<InvitationController> logger, IInvitationBusinessLogic logic)
        {
            _logger = logger;
            _logic = logic;
        }

        [HttpPost]
        [Authorize(Roles="invite_new_partner")]
        [Route("api/invitation")]
        public async Task<IActionResult> ExecuteInvitation([FromBody] InvitationData InvitationData)
        {
            try
            {
                if (await _logic.ExecuteInvitation(InvitationData).ConfigureAwait(false))
                {
                    return new OkResult();
                }
                _logger.LogError("unsuccessful");
                return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
            }
            catch (Exception e)
            {
                _logger.LogError(e.ToString());
                return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
            }
        }
    }
}
