namespace CatenaX.NetworkServices.PortalBackend.DBAccess.Models

{
    public class CompanyWithAddress
    {
        public string? Bpn { get; set; }
        public string? Name { get; set; }
        public string? City { get; set; }
        public string? Region { get; set; }
        public string? Streetadditional { get; set; }
        public string? Streetname { get; set; }
        public string? Streetnumber { get; set; }
        public decimal? Zipcode { get; set; }
        public string? Country { get; set; }
    }
}
