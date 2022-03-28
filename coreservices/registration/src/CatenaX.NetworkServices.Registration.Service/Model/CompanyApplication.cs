using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace CatenaX.NetworkServices.Registration.Service.Model
{
    public class CompanyApplication
    {
        public Guid ApplicationId { get; set; }

         [JsonConverter(typeof(StringEnumConverter))]
         public ApplicationStatus ApplicationStatus { get; set; }
    }

    public enum ApplicationStatus
    {
        AddCompanyData = 1,
        InviteUser = 2,
        SelectCompanyRole = 3,
        UploadDocuments = 4,
        Verify = 5,
        Submitted = 6
    }
}
