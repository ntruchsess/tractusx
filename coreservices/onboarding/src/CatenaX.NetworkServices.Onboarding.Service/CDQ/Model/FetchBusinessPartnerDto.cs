namespace CatenaX.NetworkServices.Onboarding.Service.CDQ.Model
{
    public class FetchBusinessPartnerDto
    {
        public string cdqId { get; set; }
        public string dataSource { get; set; }
        public Businesspartner businessPartner { get; set; }
    }

    public class Businesspartner
    {
        public Name[] names { get; set; }
        public Identifier[] identifiers { get; set; }
        public object[] categories { get; set; }
        public Address[] addresses { get; set; }
        public Formattedsaprecord formattedSapRecord { get; set; }
        public object[] types { get; set; }
    }

    public class Formattedsaprecord
    {
        public string narp { get; set; }
        public string stceg { get; set; }
        public string country { get; set; }
        public string countryCode { get; set; }
        public string city { get; set; }
        public string postalCode { get; set; }
        public string street1 { get; set; }
        public string houseNum { get; set; }
    }

    public class Name
    {
        public Type type { get; set; }
        public string value { get; set; }
        public Language language { get; set; }
    }

    public class Type
    {
        public string url { get; set; }
        public string name { get; set; }
        public string technicalKey { get; set; }
    }

    public class Language
    {
    }

    public class Identifier
    {
        public Type type { get; set; }
        public string value { get; set; }
        public Status status { get; set; }
    }

    public class Status
    {
        public string technicalKey { get; set; }
    }

    public class Address
    {
        public Country country { get; set; }
        public object[] administrativeAreas { get; set; }
        public Postcode[] postCodes { get; set; }
        public Locality[] localities { get; set; }
        public Thoroughfare[] thoroughfares { get; set; }
        public object[] premises { get; set; }
        public object[] postalDeliveryPoints { get; set; }
        public Type[] types { get; set; }
        public Formattedaddress formattedAddress { get; set; }
    }

    public class Country
    {
        public string shortName { get; set; }
        public string value { get; set; }
    }

    public class Formattedaddress
    {
        public string country { get; set; }
        public string locality { get; set; }
        public string postalCode { get; set; }
        public string thoroughfare { get; set; }
    }

    public class Postcode
    {
        public string value { get; set; }
        public Type type { get; set; }
    }

    public class Locality
    {
        public string value { get; set; }
    }

    public class Thoroughfare
    {
        public Type type { get; set; }
        public string number { get; set; }
        public string value { get; set; }
    }
}



