using System;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalDBContext
{
    public partial class AppAssignedUseCase
    {
        public Guid AppId { get; set; }
        public Guid UseCaseId { get; set; }

        public virtual App App { get; set; }
        public virtual UseCase UseCase { get; set; }
    }
}
