using System;
using System.Net;
using System.Threading.Tasks;

using CatenaX.NetworkServices.Invitation.Service.BusinessLogic;
using CatenaX.NetworkServices.Invitation.Service.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging.Abstractions;

using NSubstitute;
using NSubstitute.ExceptionExtensions;

using Xunit;

namespace CatenaX.NetworkServices.Invitation.Service.Tests
{
    public class InvitationControllerTest
    {
        [Fact]
        public async Task ExecuteInvitation_ReturnsInternalServerError_OnException()
        {
            //Setup
            var InvitationBusinessLogic = Substitute.For<IInvitationBusinessLogic>(); 
            InvitationBusinessLogic.ExecuteInvitation(Arg.Is("testIdent")).Throws<ArgumentException>();
            var sut = new InvitationController(NullLogger<InvitationController>.Instance, InvitationBusinessLogic);
            
            //Execute
            var result = await sut.ExecuteInvitation("testIdent");
            Assert.IsType<StatusCodeResult>(result);
            var statusCodeResult = result as StatusCodeResult;
            Assert.Equal(((int)HttpStatusCode.InternalServerError).ToString(), statusCodeResult.StatusCode.ToString());
        }
    }
}
