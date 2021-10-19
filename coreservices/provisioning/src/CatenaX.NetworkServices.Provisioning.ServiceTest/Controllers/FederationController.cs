using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

using CatenaX.NetworkServices.Provisioning.ActiveDirectory;
using CatenaX.NetworkServices.Provisioning.ActiveDirectory.Model;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CatenaX.NetworkServices.Provisioning.Service.Controllers
{
    [ApiController]
    [Route("api/provisioning")]
    public class CreateFederationController : ControllerBase
    {
        private readonly ILogger<CreateFederationController> _logger;
        private readonly IFederation _Federation;
        public CreateFederationController(ILogger<CreateFederationController> logger, IFederation logic)
        {
            _logger = logger;
            _Federation = logic;
        }
        [HttpGet]
        [Route("realms/{realm}/createfederation")]
        public async Task<ActionResult<Token>> ExecuteCreateFederation(string realm)
        {
            try
            {
                await _Federation.CreateFederation(realm);
                return new OkResult();
            }
            catch (Exception e)
            {
                _logger.LogError(e.ToString());
                return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
            }
        }
    }
}
