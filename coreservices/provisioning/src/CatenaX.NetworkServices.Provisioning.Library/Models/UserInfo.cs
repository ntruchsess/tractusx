using System.Collections.Generic;
using System.Collections.ObjectModel;
using Newtonsoft.Json;

namespace CatenaX.NetworkServices.Provisioning.Library.Models
{
    public class UserInfo
    {
        [JsonProperty("username")]
        public string UserName { get; set; }
        [JsonProperty("enabled")]
        public bool? Enabled { get; set; }
        [JsonProperty("firstName")]
        public string FirstName { get; set; }
        [JsonProperty("lastName")]
        public string LastName { get; set; }
        [JsonProperty("email")]
        public string Email { get; set; }
    }
}