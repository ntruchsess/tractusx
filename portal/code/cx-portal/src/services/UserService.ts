import Keycloak from 'keycloak-js'
import { IUser } from 'types/user/UserTypes'
import {ROLES} from 'types/MainTypes'

const keycloakConfig = {
  url: process.env.REACT_APP_BASE_CENTRAL_IDP,
  realm: 'CX-Central',
  clientId: 'catenax-portal',
  'ssl-required': 'external',
  'public-client': true,
}

const KC = new (Keycloak as any)(keycloakConfig)

const init = (onAuthenticatedCallback: (loggedUser: IUser) => any) => {
  KC.init({
    onLoad: 'login-required',
    silentCheckSsoRedirectUri:
      window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256',
  }).then((authenticated: boolean) => {
    if (authenticated) {
      // User authenticated successfully
      // Prepare user data to store it in Redux
      const loggedUser: IUser = {
        userName: getUsername(),
        name: getName(),
        email: getEmail(),
        company: getCompany(),
        roles: getRoles(),
        isAdmin: isAdmin(),
        token: getToken(),
        parsedToken: getParsedToken(),
      }
      onAuthenticatedCallback(loggedUser)
    } else {
      doLogin()
    }
  })
}

const doLogin = KC.login

const doLogout = KC.logout

const getToken = () => KC.token

const getParsedToken = () => KC.tokenParsed

const updateToken = () => KC.updateToken(5).catch(doLogin)

const getUsername = () => KC.tokenParsed.preferred_username

const getName = () => KC.tokenParsed?.name

const getEmail = () => KC.tokenParsed?.email

const getCompany = () => KC.tokenParsed?.organisation

const getRoles = () =>
  KC.tokenParsed?.resource_access[keycloakConfig.clientId]?.roles

const hasRole = (role: string) => getRoles()?.includes(role)

const isAdmin = () => hasRole(ROLES.CX_ADMIN)

const isLoggedIn = () => !!KC.token

const UserService = {
  doLogin,
  doLogout,
  getToken,
  getParsedToken,
  getEmail,
  getUsername,
  getName,
  getCompany,
  getRoles,
  hasRole,
  init,
  isAdmin,
  isLoggedIn,
  updateToken,
}

export default UserService
