using CatenaX.NetworkServices.Cosent.Library.Data;
using CatenaX.NetworkServices.Mockups;
using CatenaX.NetworkServices.Provisioning.Library;
using CatenaX.NetworkServices.Registration.Service.BusinessLogic;
using CatenaX.NetworkServices.Registration.Service.Model;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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
        [Authorize(Roles = "add_company_data")]
        [Route("company/{bpn}")]
        [ProducesResponseType(typeof(Company), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetOneObjectAsync([FromRoute] string bpn) =>
            Ok(await _registrationBusinessLogic.GetCompanyByIdentifierAsync(bpn).ConfigureAwait(false));

        [HttpPost]
        [Authorize(Policy = "CheckTenant")]
        [Authorize(Roles = "invite_user")]
        [Route("tenant/{tenant}/users")]
        public async Task<IActionResult> CreateUsersAsync([FromRoute] string tenant, [FromBody] List<UserCreationInfo> usersToCreate)
        {
            try
            {
                var createdByEmail = User.Claims.SingleOrDefault(x => x.Type == "preferred_username").Value as string;
                var createdByName = User.Claims.SingleOrDefault(x => x.Type == "name").Value as string;
                var createdUsers = await _registrationBusinessLogic.CreateUsersAsync(usersToCreate, tenant, createdByEmail, createdByName).ConfigureAwait(false);

                return Ok(createdUsers);
            }
            catch (Exception e)
            {
                _logger.LogError(e.ToString());
                return StatusCode((int)HttpStatusCode.InternalServerError);

            }
        }

        [HttpPost]
        [Authorize(Roles = "submit_registration")]
        [Route("custodianWallet")]
        public async Task<IActionResult> CreateWallet([FromBody] WalletInformation walletToCreate)
        {
            await _registrationBusinessLogic.CreateCustodianWalletAsync(walletToCreate).ConfigureAwait(false);
            return Ok();
        }

        [HttpPost]
        [Route("documents")]
        [Authorize(Roles = "invite_user")]
        public async Task<IActionResult> CreateDocument([FromForm(Name = "document")] IFormFile document)
        {
            var username = User.Claims.SingleOrDefault(x => x.Type == "sub").Value as string;
            await _registrationBusinessLogic.CreateDocument(document, username);
            return new OkResult();
        }

        [HttpPut]
        [Authorize(Roles="invite_user")]
        [Route("companyRoles")]
        public async Task<IActionResult> SetCompanyRolesAsync([FromBody] CompanyToRoles rolesToSet)
        {
            await _registrationBusinessLogic.SetCompanyRolesAsync(rolesToSet).ConfigureAwait(false);
            return Ok();
        }

        [HttpGet]
        [Authorize(Roles="view_registration")]
        [Route("companyRoles")]
        [ProducesResponseType(typeof(List<CompanyRole>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetCompanyRolesAsync() =>
            Ok((await _registrationBusinessLogic.GetCompanyRolesAsync().ConfigureAwait(false)).ToList());

        [HttpGet]
        [Authorize(Roles="sign_consent")]
        [Route("consentsForCompanyRole/{roleId}")]
        [ProducesResponseType(typeof(List<ConsentForCompanyRole>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetCompanyRolesAsync(int roleId) =>
            Ok((await _registrationBusinessLogic.GetConsentForCompanyRoleAsync(roleId).ConfigureAwait(false)).ToList());

        [HttpGet]
        [Authorize(Roles="sign_consent")]
        [Route("signedConsentsByCompanyId/{companyId}")]
        [ProducesResponseType(typeof(List<SignedConsent>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> SignedConsentsByCompanyIdAsync(string companyId) =>
            Ok((await _registrationBusinessLogic.SignedConsentsByCompanyIdAsync(companyId).ConfigureAwait(false)).ToList());

        [HttpPut]
        [Authorize(Roles="sign_consent")]
        [Route("signConsent")]
        public async Task<IActionResult> SignConsentAsync([FromBody] SignConsentRequest signConsentRequest)
        {
            await _registrationBusinessLogic.SignConsentAsync(signConsentRequest).ConfigureAwait(false);
            return Ok();
        }

        [HttpPut]
        [Authorize(Roles="invite_user")]
        [Route("idp")]
        public async Task<IActionResult> SetIdpAsync([FromBody] SetIdp idpToSet)
        {
            await _registrationBusinessLogic.SetIdpAsync(idpToSet).ConfigureAwait(false);
            return Ok();
        }

        [HttpGet]
        [Authorize(Roles="view_registration")]
        [Route("rolesComposite")]
        [ProducesResponseType(typeof(List<string>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetClientRolesComposite() =>
            Ok((await _registrationBusinessLogic.GetClientRolesCompositeAsync().ConfigureAwait(false)).ToList());
    }
}
