import Keycloak from 'keycloak-js'

const CX_ROLES = {
  ADMIN: 'CX Admin',
}

const keycloakConfig = {
  url: process.env.REACT_APP_BASE_CENTRAL_IDP,
  realm: 'CX-Central',
  clientId: 'catenax-portal',
  'ssl-required': 'external',
  'public-client': true,
}

const KC = new (Keycloak as any)(keycloakConfig)

const initKeycloak = (onAuthenticatedCallback: Function) => {
  KC.init({
    onLoad: 'login-required',
    silentCheckSsoRedirectUri:
      window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256',
  }).then((authenticated: boolean) => {
    if (authenticated) {
      onAuthenticatedCallback()
    } else {
      doLogin()
    }
  })
}

const doLogin = KC.login

const doLogout = KC.logout

const getToken = () => KC.token

const getParsedToken = () => KC.tokenParsed

const updateToken = (successCallback: Function) =>
  KC.updateToken(5).then(successCallback).catch(doLogin)

const getUsername = () => KC.tokenParsed.preferred_username

const getName = () => KC.tokenParsed?.name

const getEmail = () => KC.tokenParsed?.email

const getCompany = () => KC.tokenParsed?.organisation

const getRoles = () =>
  KC.tokenParsed?.resource_access[keycloakConfig.clientId]?.roles

const hasRole = (role: string) => getRoles()?.includes(role)

const isAdmin = () => hasRole(CX_ROLES.ADMIN)

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
  initKeycloak,
  isAdmin,
  isLoggedIn,
  updateToken,
}

export default UserService
