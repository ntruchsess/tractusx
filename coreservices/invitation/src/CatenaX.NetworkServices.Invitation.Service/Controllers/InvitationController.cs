using System;
using System.Net;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using CatenaX.NetworkServices.Invitation.Service.BusinessLogic;
using System.Linq;
using System.Collections.Generic;
using CatenaX.NetworkServices.Provisioning.Library;

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

        [HttpPost]
        [Authorize(Roles="add_user_account")]
        [Route("api/invitation/tenant/{tenant}/users")]
        public async Task<IActionResult> ExecuteUserCreation([FromRoute] string tenant, [FromBody] IEnumerable<UserCreationInfo> usersToCreate)
        {
            try
            {
                var createdByEmail = User.Claims.SingleOrDefault( x => x.Type=="preferred_username").Value as string;
                var createdByName = User.Claims.SingleOrDefault( x => x.Type=="name").Value as string;
                var createdUsers = await _logic.CreateUsersAsync(usersToCreate, tenant, createdByEmail, createdByName).ConfigureAwait(false);
                {
                    return Ok(createdUsers);
                }
            }
            catch (Exception e)
            {
                _logger.LogError(e.ToString());
                return new StatusCodeResult((int)HttpStatusCode.InternalServerError);

            }
        }
    }
}
