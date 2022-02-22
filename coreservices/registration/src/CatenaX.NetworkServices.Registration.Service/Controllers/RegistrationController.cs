using CatenaX.NetworkServices.Cosent.Library.Data;
using CatenaX.NetworkServices.Mockups;
using CatenaX.NetworkServices.Registration.Service.BusinessLogic;
using CatenaX.NetworkServices.Registration.Service.Model;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Registration.Service.Controllers
{
    [ApiController]
    [Route("api/registration")]
    public class RegistrationController : ControllerBase
    {
        private readonly ILogger<RegistrationController> _logger;
        private readonly IRegistrationBusinessLogic _registrationBusinessLogic;

        public RegistrationController(ILogger<RegistrationController> logger, IRegistrationBusinessLogic registrationBusinessLogic)
        {
            _logger = logger;
            _registrationBusinessLogic = registrationBusinessLogic;
        }

        [HttpGet]
        [Authorize(Roles="add_company_data")]
        [Route("company/{bpn}")]
        [ProducesResponseType(typeof(Company), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetOneObjectAsync([FromRoute] string bpn) =>
            new OkObjectResult(await _registrationBusinessLogic.GetCompanyByIdentifierAsync(bpn).ConfigureAwait(false));

        [HttpPost]
        [Authorize(Policy="CheckTenant")]
        [Authorize(Roles="invite_user")]
        [Route("company/{tenant}/users")]
        public async Task<IActionResult> CreateUsersAsync([FromRoute] string tenant, [FromBody] List<UserCreationInfo> usersToCreate)
        {
            try
            {
                var createdByEmail = User.Claims.SingleOrDefault( x => x.Type=="preferred_username").Value as string;
                var createdByName = User.Claims.SingleOrDefault( x => x.Type=="name").Value as string;
                var createdUsers = await _registrationBusinessLogic.CreateUsersAsync(usersToCreate, tenant, createdByEmail, createdByName).ConfigureAwait(false);
                {
                    return Ok(createdUsers);
                }
                //_logger.LogError("unsuccessful");
                //return new StatusCodeResult((int)HttpStatusCode.InternalServerError);
            }
            catch (Exception e)
            {
                _logger.LogError(e.ToString());
                return new StatusCodeResult((int)HttpStatusCode.InternalServerError);

            }
        }

        [HttpPost]
        [Authorize(Roles="submit_registration")]
        [Route("company/custodianWallet")]
        public async Task<IActionResult> CreateWallet([FromBody] WalletInformation walletToCreate)
        {
            await _registrationBusinessLogic.CreateCustodianWalletAsync(walletToCreate).ConfigureAwait(false);
            return new OkResult();
        }

        [HttpPut]
        [Authorize(Roles="invite_user")]
        [Route("company/companyRoles")]
        public async Task<IActionResult> SetCompanyRolesAsync([FromBody] CompanyToRoles rolesToSet)
        {
            await _registrationBusinessLogic.SetCompanyRolesAsync(rolesToSet).ConfigureAwait(false);
            return new OkResult();
        }

        [HttpGet]
        [Authorize(Roles="view_registration")]
        [Route("company/companyRoles")]
        [ProducesResponseType(typeof(List<CompanyRole>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetCompanyRolesAsync() =>
            new OkObjectResult((await _registrationBusinessLogic.GetCompanyRolesAsync().ConfigureAwait(false)).ToList());

        [HttpGet]
        [Authorize(Roles="sign_consent")]
        [Route("company/consentsForCompanyRole/{roleId}")]
        [ProducesResponseType(typeof(List<ConsentForCompanyRole>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetCompanyRolesAsync(int roleId) =>
            new OkObjectResult((await _registrationBusinessLogic.GetConsentForCompanyRoleAsync(roleId).ConfigureAwait(false)).ToList());

        [HttpGet]
        [Authorize(Roles="sign_consent")]
        [Route("company/signedConsentsByCompanyId/{companyId}")]
        [ProducesResponseType(typeof(List<SignedConsent>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> SignedConsentsByCompanyIdAsync(string companyId) =>
            new OkObjectResult((await _registrationBusinessLogic.SignedConsentsByCompanyIdAsync(companyId).ConfigureAwait(false)).ToList());

        [HttpPut]
        [Authorize(Roles="sign_consent")]
        [Route("company/signConsent")]
        public async Task<IActionResult> SignConsentAsync([FromBody] SignConsentRequest signConsentRequest)
        {
            await _registrationBusinessLogic.SignConsentAsync(signConsentRequest).ConfigureAwait(false);
            return new OkResult();
        }

        [HttpPut]
        [Authorize(Roles="invite_user")]
        [Route("company/idp")]
        public async Task<IActionResult> SetIdpAsync([FromBody] SetIdp idpToSet)
        {
            await _registrationBusinessLogic.SetIdpAsync(idpToSet).ConfigureAwait(false);
            return new OkResult();
        }

        [Obsolete] // as the process has changed this is a noop now.
        [HttpPut]
        [Authorize(Roles="submit_registration")]
        [Route("company/finishRegistration")]
        public Task<IActionResult> FinishRegistrationAsync() => Task.FromResult(new OkResult() as IActionResult);

        [HttpGet]
        [Authorize(Roles="view_registration")]
        [Route("rolesComposite")]
        [ProducesResponseType(typeof(List<string>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetClientRolesComposite() =>
            new OkObjectResult((await _registrationBusinessLogic.GetClientRolesCompositeAsync().ConfigureAwait(false)).ToList());
    }
}
