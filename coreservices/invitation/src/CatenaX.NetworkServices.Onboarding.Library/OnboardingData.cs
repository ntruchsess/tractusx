using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace CatenaX.NetworkServices.Onboarding.Library
{
    public class OnboardingData
    {
        [JsonPropertyName("oneId")]
        public string OneId { get; set; }

        [JsonPropertyName("eMail")]
        public string EMail { get; set; }
    }
}
