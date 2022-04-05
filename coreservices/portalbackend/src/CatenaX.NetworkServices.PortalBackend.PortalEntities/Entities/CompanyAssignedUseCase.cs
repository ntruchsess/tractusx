using System;

#nullable disable

namespace CatenaX.NetworkServices.PortalBackend.PortalEntities.Entities
{
    public class CompanyAssignedUseCase
    {
        public Guid CompanyId { get; set; }
        public Guid UseCaseId { get; set; }

        public virtual Company Company { get; set; }
        public virtual UseCase UseCase { get; set; }
    }
}
