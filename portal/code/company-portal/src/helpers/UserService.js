import Keycloak from "keycloak-js";

/*
function getQueryParams(qs) {
  qs = qs.split('+').join(' ');

  var params = {},
      tokens,
      re = /[?&]?([^=]+)=([^&]*)/g;

  while (tokens = re.exec(qs)) {
      params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
}
const _kc = new Keycloak({
  "realm": getQueryParams(window.location.search).company,
  "auth-server-url": "http://20.79.210.70:8080/auth",
  "ssl-required": "external",
  "resource": "onboard",
  "public-client": true
});
*/

const _kc = new Keycloak('/keycloak.json');

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback) => {
  _kc.init({
    onLoad: 'login-required',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256',
  })
    .then((authenticated) => {
      // if (authenticated) {
      onAuthenticatedCallback();
      // } else {
      //   doLogin();
      // }
    })
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

//forward as header "authentication: Bearer ${getToken()}"
const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
  _kc.updateToken(5)
    .then(successCallback)
    .catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const getInitials = () => _kc.tokenParsed?.preferred_username.split(/[.@]/).reduce((a,b) => a+b[0],'').substring(0,2).toUpperCase();

const getDomain = () => 'Microsoft';//_kc.tokenParsed?.split('/').pop();

const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  getInitials,
  getDomain,
  hasRole,
};

export default UserService;
