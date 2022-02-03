const { Config } = require('../catenax/Config');

const nameToID = name => name.toLowerCase().replace(/ +/g,'-')

const KeycloakTemplates = {

    realm: {
        id: "REALM",
        realm: "REALM",
        displayName: "REALM",
        enabled: true
    },

    client: {
        "id": "CLIENT",
        "clientId": "CLIENT",
        "name": "CLIENT",
        "directAccessGrantsEnabled": true,
        "publicClient": true,
        "redirectUris": [
            `${Config.KEYCLOAK_CENTRAL}/*`
        ],
        "webOrigins": [
            "+"
        ]
    },

    user: {
        "username": "MAIL",
        "email": "MAIL",
        "enabled": true,
        "firstName": "firstname",
        "lastName": "lastname",
        "credentials": [
            {
                "temporary": false,
                "type": "password",
                "value": "PASS"
            }
        ]
    },

    getIdp: function(name, secret, gui) {
        const realm = nameToID(name)
        return {
            alias: realm,
            displayName: name,
            providerId: 'keycloak-oidc',
            config: {
                clientAuthMethod: 'client_secret_basic',
                clientId: `${name}-catenax`,
                clientSecret: secret,
                issuer:           `${Config.KEYCLOAK_SHARED}/realms/${realm}`,
                userInfoUrl:      `${Config.KEYCLOAK_SHARED}/realms/${realm}/protocol/openid-connect/userinfo`,
                tokenUrl:         `${Config.KEYCLOAK_SHARED}/realms/${realm}/protocol/openid-connect/token`,
                jwksUrl:          `${Config.KEYCLOAK_SHARED}/realms/${realm}/protocol/openid-connect/certs`,
                authorizationUrl: `${Config.KEYCLOAK_SHARED}/realms/${realm}/protocol/openid-connect/auth`,
                logoutUrl:        `${Config.KEYCLOAK_SHARED}/realms/${realm}/protocol/openid-connect/logout`,
                syncMode: 'IMPORT',
                useJwksUrl: 'true',
                guiOrder: gui
            }
        }
    },

    getRealm: function (realm) {
        return Object.assign({}, this.realm, { id: realm, realm: realm, displayName: realm });
    },

    getClient: function (client) {
        return Object.assign({}, this.client, { id: client, clientId: client, name: client });
    },

    getUser: function (user) {
        return Object.assign({}, this.user, user);
    },

    getUsername: function (mail, password) {
        const user = this.getUser({ username: mail, email: mail });
        user.credentials[0].value = password;
        return user;
    }

}

exports.KeycloakTemplates = KeycloakTemplates;
