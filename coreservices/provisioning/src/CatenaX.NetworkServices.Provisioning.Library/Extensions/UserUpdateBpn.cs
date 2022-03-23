using System.Collections.Generic;
namespace CatenaX.NetworkServices.Provisioning.Library
{
    public class UserUpdateBpn
    {
        public string userId { get; set; }

        public IEnumerable<string> bpns { get; set; }
    }
}