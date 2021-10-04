using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

using CatenaX.NetworkServices.Onboarding.Identity.Model;

namespace CatenaX.NetworkServices.Onboarding.Identity
{
    public interface IIdentityManager
    {
        Task CreateRealm(CreateRealm realm);

        Task<string> CreateUser(string realm, CreateUser user);

        Task CreateGroup(string realm, CreateGroup group);
    }
}
