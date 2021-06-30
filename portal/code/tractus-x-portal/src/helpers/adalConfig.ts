// THIS CODE AND INFORMATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF
// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// Copyright (c) Microsoft. All rights reserved
//

import { AdalConfig, adalGetToken, AuthenticationContext, withAdalLogin } from 'react-adal';

// Endpoint URL
export const endpoint = 'https://catenax.azurewbsites.net/';

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
const appId = '4c6269ac-8106-4bbb-b0d9-6c36a6e3b131';
export const adalConfig: AdalConfig = {
  cacheLocation: 'localStorage',
  clientId: appId,
  endpoints: {
    api: endpoint
  },
  redirectUri: getReplyUrl(),
  // popUp: true,
  postLogoutRedirectUri: window.location.origin,
  tenant: 'catenaxpoc.onmicrosoft.com'
};

const ctx: any = new AuthenticationContext(adalConfig);

export const withAdalLoginApi = withAdalLogin(ctx, adalConfig.clientId);

class AdalContext {
  private readonly authContext: AuthenticationContext;
  private readonly isAdmin: boolean = false;
  constructor() {
    this.authContext = ctx;
  }

  get AuthContext() {
    return this.authContext;
  }

  get IsAdmin() {
    return this.isAdmin;
  }

  public acquireToken(resource?: string): Promise<string> {
    resource = resource || appId;
    const promise = new Promise<string>((resolve, reject) => {
      const user = this.AuthContext.getCachedUser();
      if (user) {
        this.authContext.config.extraQueryParameter = 'login_hint=' + (user.profile.upn || user.userName);
      }
  
      adalGetToken(this.authContext, resource).then((token) => {
        resolve(token);
      }, (error) => {
        if (error) {
          console.log(error);
          if (error.msg === 'login_required' || error.msg === 'interaction_required') {
            this.authContext.login();
          } else {
            // AlertDialog.(error.message);
          }
        }
      });
    });
  
    return promise;
  }
  
  public getToken(): Promise<string | null> {
    return adalGetToken(this.authContext, endpoint);
  }

  public getCachedToken(): string {
    return this.authContext.getCachedToken(this.authContext.config.clientId);
  }

  public getFullName(): string {
    let name = '';
    const user = this.authContext.getCachedUser();
    if (user) {
      name = user.profile?.name || user.userName;
    }

    const n = name.indexOf('(');
    if (n >= 0) {
      name = name.substring(0, n).trim();
    }

    return name;
  }

  public getInitials(username: string): string {
    let initials = 'XX';
    if (username.indexOf('@') < 0) {
      const parts = username.split(' ');
      initials = parts[0].substr(0, 1);
      if (parts.length > 1) {
        initials += parts[1].substr(0, 1);
      }
    } else {
      const parts = username.split('@');
      if (parts.length > 0) {
        initials = parts[0].substr(0, 1);
        const words = parts[0].split(/[^a-zA-Z]/);
        if (words.length > 1) {
          initials += words[1].substr(0, 1);
        } else {
          for (let i = 1; i < parts[0].length; i++) {
            const ch = parts[0].substr(i, 1);
            if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(ch) > 0) {
              initials += ch;
              break;
            }
          }
        }

        if (initials.length < 2 && parts[0].length > 1) {
          initials = parts[0].substr(0, 2);
        }
      }
    }

    return initials.toUpperCase();
  }

  public getDomain(username: string) {
    let domain = '';
    if (username) {
      const parts = username.split('@');
      if (parts.length > 1) {
        domain = parts[1];
        const n = domain.indexOf('.');
        if (n > 0) {
          domain = domain.substring(0, n);
        }
      }

      if (domain.length > 0) {
        domain = domain.substring(0, 1).toUpperCase() + domain.substr(1);
      }

      if (domain.length < 4) {
        domain = domain.toUpperCase();
      }
    }

    return domain;
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
