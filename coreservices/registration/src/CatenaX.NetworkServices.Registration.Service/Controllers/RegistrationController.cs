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
        [Authorize(Policy="RealmEqualsTenant")] // mandatory roles?
        [Route("company/{realm}/{bpn}")]
        [ProducesResponseType(typeof(Company), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetOneObjectAsync([FromRoute] string bpn) =>
            new OkObjectResult(await _registrationBusinessLogic.GetCompanyByIdentifierAsync(bpn).ConfigureAwait(false));

        [HttpPost]
        [Obsolete] // as discussed this requires refactoring to comply with new setup. To access Name, FirstName and/or LastName retrieve the User-object from Keycloak using claim 'sub' from token as userid.
        [Authorize(Policy="RealmEqualsTenant")]
        [Authorize(Roles="invite_users")]
        [Route("company/{realm}/users")]
        public async Task<IActionResult> CreateUsersAsync([FromRoute] string realm, [FromHeader] string authorization, [FromBody] List<UserCreationInfo> userToCreate)
        {
            await _registrationBusinessLogic.CreateUsersAsync(userToCreate, realm, authorization.Split(" ")[1], new Dictionary<string, string> {
                ["preferred_username"]=User.Claims.SingleOrDefault( x => x.Type=="preferred_username").Value as string
            }).ConfigureAwait(false);
            return new OkResult();
        }

        [HttpPost]
        [Authorize(Policy="RealmEqualsTenant")] // mandatory roles?
        [Route("company/{realm}/custodianWallet")]
        public async Task<IActionResult> CreateWallet([FromBody] WalletInformation walletToCreate)
        {
            await _registrationBusinessLogic.CreateCustodianWalletAsync(walletToCreate).ConfigureAwait(false);
            return new OkResult();
        }

        [HttpPut]
        [Authorize(Policy="RealmEqualsTenant")] // mandatory roles?
        [Route("company/{realm}/companyRoles")]
        public async Task<IActionResult> SetCompanyRolesAsync([FromBody] CompanyToRoles rolesToSet)
        {
            await _registrationBusinessLogic.SetCompanyRolesAsync(rolesToSet).ConfigureAwait(false);
            return new OkResult();
        }

        [HttpGet]
        [Authorize(Policy="RealmEqualsTenant")] // mandatory roles?
        [Route("company/{realm}/companyRoles")]
        [ProducesResponseType(typeof(List<CompanyRole>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetCompanyRolesAsync() =>
            new OkObjectResult((await _registrationBusinessLogic.GetCompanyRolesAsync().ConfigureAwait(false)).ToList());

        [HttpGet]
        [Authorize(Policy="RealmEqualsTenant")] // mandatory roles?
        [Route("company/{realm}/consentsFoCompanyRole/{roleId}")]
        [ProducesResponseType(typeof(List<ConsentForCompanyRole>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetCompanyRolesAsync(int roleId) =>
            new OkObjectResult((await _registrationBusinessLogic.GetConsentForCompanyRoleAsync(roleId).ConfigureAwait(false)).ToList());

        [HttpGet]
        [Authorize(Policy="RealmEqualsTenant")] // mandatory roles?
        [Route("company/{realm}/signedConsentsByCompanyId/{companyId}")]
        [ProducesResponseType(typeof(List<SignedConsent>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> SignedConsentsByCompanyIdAsync(string companyId) =>
            new OkObjectResult((await _registrationBusinessLogic.SignedConsentsByCompanyIdAsync(companyId).ConfigureAwait(false)).ToList());

        [HttpPut]
        [Authorize(Policy="RealmEqualsTenant")] // mandatory roles?
        [Route("company/{realm}/signConsent")]
        public async Task<IActionResult> SignConsentAsync([FromBody] SignConsentRequest signConsentRequest)
        {
            await _registrationBusinessLogic.SignConsentAsync(signConsentRequest).ConfigureAwait(false);
            return new OkResult();
        }

        [HttpPut]
        [Authorize(Policy="RealmEqualsTenant")] // mandatory roles?
        [Route("company/{realm}/idp")]
        public async Task<IActionResult> SetIdpAsync([FromBody] SetIdp idpToSet)
        {
            await _registrationBusinessLogic.SetIdpAsync(idpToSet).ConfigureAwait(false);
            return new OkResult();
        }

        [Obsolete] // as the process has changed this is a noop now.
        [HttpPut]
        [Authorize(Policy="RealmEqualsTenant")] // mandatory roles?
        [Route("company/{realm}/finishRegistration")]
        public Task<IActionResult> FinishRegistrationAsync() => Task.FromResult(new OkResult() as IActionResult);

        [Obsolete] // afaik this has been replaced by the call to GetClientRolesComposite
        [HttpGet]
        [Authorize(Policy="RealmEqualsTenant")] // mandatory roles?
        [Route("company/{realm}/userRoles")]
        [ProducesResponseType(typeof(List<string>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetUserRolesAsync() =>
            new OkObjectResult((await _registrationBusinessLogic.GetAvailableUserRoleAsync().ConfigureAwait(false)).ToList());

        [HttpGet] // remove or refactor, specifying the realm is pointless as we access the central realm here
        [Authorize(Policy="RealmEqualsTenant")] // mandatory roles?
        [Route("company/{realm}/clients/{clientId}/rolesComposite")]
        [ProducesResponseType(typeof(List<string>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetClientRolesComposite([FromRoute] string clientId) =>
            new OkObjectResult((await _registrationBusinessLogic.GetClientRolesCompositeAsync(clientId).ConfigureAwait(false)).ToList());

        [Obsolete] // remove, Roles should be taken in the FE, directly from the token, specifying the realm is pointless as we access the central realm here
        [HttpGet]
        [Authorize(Policy="RealmEqualsTenant")] // mandatory roles?
        [Route("company/{realm}/clients/{clientId}/userRoleMappingsComposite")]
        [ProducesResponseType(typeof(List<string>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetUserClientRoleMappingsCompositeAsync([FromRoute] string clientId) =>
            new OkObjectResult((await _registrationBusinessLogic.GetUserClientRoleMappingsCompositeAsync(
                    User.Claims.SingleOrDefault(x => x.Type=="sub").Value,
                    clientId
                ).ConfigureAwait(false)).ToList());

        [Obsolete] // remove, users are not assigned to groups any more
        [HttpGet]
        [Authorize(Policy="RealmEqualsTenant")] // mandatory roles?
        [Route("company/{realm}/groups")]
        [ProducesResponseType(typeof(List<string>), (int)HttpStatusCode.OK)]
        public Task<IActionResult> GetGroups() =>
            Task.FromResult(new OkObjectResult(new List<string>()) as IActionResult);
        
        [Obsolete] // remove, users are not assigned to groups any more
        [HttpGet]
        [Authorize(Policy="RealmEqualsTenant")] // mandatory roles?
        [Route("company/{realm}/userGroups")]
        [ProducesResponseType(typeof(List<string>), (int)HttpStatusCode.OK)]
        public Task<IActionResult> GetUserGroupsAsync() =>
            Task.FromResult(new OkObjectResult(new List<string>()) as IActionResult);
    }
}
