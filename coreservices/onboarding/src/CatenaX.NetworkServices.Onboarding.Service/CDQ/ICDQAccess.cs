using CatenaX.NetworkServices.Onboarding.Service.CDQ.Model;

using System.Threading.Tasks;

namespace CatenaX.NetworkServices.Onboarding.Service.CDQ
{
    public interface ICDQAccess
    {
        public Task<FetchBusinessPartnerDto> FetchBusinessPartner(string cdqId);
    }
}
