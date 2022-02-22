import Keycloak from 'keycloak-js';

const CX_REALM = 'CX-Central'; 
const CX_CLIENT = 'catenax-portal';
const CX_ADMIN_ROLE = 'CX Admin';

const realm = CX_REALM;
const clientId = CX_CLIENT;

//const _kc = new Keycloak('/keycloak.json');
const _kc = new Keycloak({
  "url": process.env.REACT_APP_KEYCLOAK_URL,
  "realm": CX_REALM,
  "clientId": CX_CLIENT,
  "ssl-required": "external",
  "public-client": true
});

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

const getParsedToken = () => _kc.tokenParsed;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
  _kc.updateToken(5)
    .then(successCallback)
    .catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const getName = () => _kc.tokenParsed?.name;

const getInitials = () => _kc.tokenParsed?.name.split(/[ -_.@]/).reduce((a,b) => a+b[0],'').substring(0,2).toUpperCase();

const getDomain = () => CX_REALM;

const getTenant = () => _kc.tokenParsed?.tenant;

const getCompany = () => _kc.tokenParsed?.organisation;

const getRoles = () => _kc.tokenParsed?.resource_access[CX_CLIENT]?.roles;

const hasRole = (role) => getRoles()?.includes(role);

const isAdmin = () => hasRole(CX_ADMIN_ROLE);

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  getParsedToken,
  updateToken,
  getUsername,
  getName,
  getInitials,
  getDomain,
  getTenant,
  getCompany,
  getRoles,
  isAdmin,
  hasRole,
  realm,
  clientId
};

export default UserService;
