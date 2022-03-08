using System;
using System.Net;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using CatenaX.NetworkServices.Invitation.Service.BusinessLogic;
using System.Collections.Generic;
using CatenaX.NetworkServices.Invitation.Service.Models;

namespace CatenaX.NetworkServices.Invitation.Service.Controllers
{
    [ApiController]
    public class UserAdministrationController : ControllerBase
    {

        private readonly ILogger<UserAdministrationController> _logger;
        private readonly IUserAdministrationBusinessLogic _logic;

        public UserAdministrationController(ILogger<UserAdministrationController> logger, IUserAdministrationBusinessLogic logic)
        {
            _logger = logger;
            _logic = logic;
        }

        [HttpGet]
        [Route("api/invitation/tenant/{tenant}/joinedusers")]
        public Task<IEnumerable<JoinedUserInfo>> QueryJoinedUsers(
                [FromRoute] string tenant,
                [FromQuery] string userId = null,
                [FromQuery] string providerUserId = null,
                [FromQuery] string userName = null,
                [FromQuery] string firstName = null,
                [FromQuery] string lastName = null,
                [FromQuery] string email = null) =>
            _logic.GetJoinedUserInfosAsync(tenant, userId, providerUserId, userName, firstName, lastName, email);
    }
}
