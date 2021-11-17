namespace CatenaX.NetworkServices.Onboarding.Service.CDQ.Model
{
    public class PaginatedFetchBusinessPartner
    {
        public int pageSize { get; set; }
        public int totals { get; set; }
        public int page { get; set; }
        public FetchBusinessPartnerDto[] values { get; set; }
    }
}



