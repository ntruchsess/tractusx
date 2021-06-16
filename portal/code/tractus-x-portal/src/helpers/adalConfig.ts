// THIS CODE AND INFORMATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. All rights reserved
//

import { AdalConfig, adalGetToken, AuthenticationContext } from 'react-adal';
// Endpoint URL
export const endpoint = 'https://tractusx.azurewbsites.net/';

export function getReplyUrl() {
  const url = new URL(window.location.href);
  let protocol = url.protocol;
  if (url.host.indexOf('localhost') < 0) {
    protocol = 'https:';
  }
  const ret = protocol + '//' + url.host + '/';
  return ret;
}

// App Registration ID bb01c83a-f70e-44d9-a0ac-f6b3b70c1775
const appId = 'bb01c83a-f70e-44d9-a0ac-f6b3b70c1775';
export const adalConfig: AdalConfig = {
  cacheLocation: 'localStorage',
  clientId: appId,
  endpoints: {
    api: endpoint
  },
  redirectUri: getReplyUrl(),
  // popUp: true,
  postLogoutRedirectUri: window.location.origin,
  tenant: 'microsoft.com'
};

class AdalContext {
    private readonly authContext: AuthenticationContext;
    private readonly isAdmin: boolean = false;
    constructor() {
      this.authContext = new AuthenticationContext(adalConfig);
    }

    get AuthContext() {
        return this.authContext;
    }

    get IsAdmin() {
        return this.isAdmin;
    }

    public getToken(): Promise<string | null> {
        return adalGetToken(this.authContext, endpoint);
    }

    public getCachedToken(): string {
        return this.authContext.getCachedToken(this.authContext.config.clientId);
    }

    public getUsername(): string {
        let username = '';
        const user = this.authContext.getCachedUser();
        if (user) {
            username = user.userName;
        }

        return username;
    }

    public logOut() {
        this.authContext.logOut();
    }
}

const adalContext: AdalContext = new AdalContext();
export default adalContext;
