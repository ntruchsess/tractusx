require('dotenv').config()
const fetch = require('node-fetch');
const httpsProxyAgent = require('https-proxy-agent');
const { KeycloakTemplates } = require('./KeycloakTemplates');
const agent = process && process.env && process.env.https_proxy
    ? httpsProxyAgent(process.env.https_proxy)
    : undefined
const admin = {
    realm: 'master',
    client: 'admin-cli',
    username: process.env.KC_USER,
    password: process.env.KC_PASS
}
const nameToID = name => name.toLowerCase().replace(/ +/g,'-')

class Keycloak {

    constructor(base) {
        this.base = base
    }

    async authenticate(cred) {
        const url = `${this.base}/realms/${cred.realm}/protocol/openid-connect/token`
        const params = {
            'client_id': cred.client,
            'grant_type': 'password',
            'username': cred.username,
            'password': cred.password
        }
        const response = await fetch(url, {
            method: 'POST',
            body: new URLSearchParams(params),
            agent: agent
        })
        let result;
        try {
            result = await response.json() 
        } catch (error) {
            result = {}
        }
        return result
    }

    async getKeys(realm) {
        const url = `${this.base}/realms/${realm}/protocol/openid-connect/certs`
        const response = await fetch(url, {
            agent: agent
        })
        let result;
        try {
            result = await response.json() 
        } catch (error) {
            result = {}
        }
        return result
    }

    async adminCall(method, resource, body) {
        const token = await this.authenticate(admin)
        const url = `${this.base}${resource}`
        const response = await fetch(url, {
            method: method,
            headers: {
                'authorization': `Bearer ${token.access_token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(body),
            agent: agent
        })
        let result;
        try {
            result = await response.json() 
        } catch (error) {
            result = {}
        }
        return result
    }



    async getRealms() {
        return await this.adminCall('GET', '/admin/realms')
    }

    async createRealm(realm) {
        return await this.adminCall('POST', `/admin/realms`, KeycloakTemplates.getRealm(realm))
    }

    async deleteRealm(realm) {
        return await this.adminCall('DELETE', `/admin/realms/${realm}`)
    }

    async getClients(realm) {
        return await this.adminCall('GET', `/admin/realms/${realm}/clients`)
    }

    async createClient(realm, client) {
        return await this.adminCall('POST', `/admin/realms/${realm}/clients`, KeycloakTemplates.getClient(`${realm}-${client}`))
    }

    async createClientSecret(realm, clientid) {
        return await this.adminCall('POST', `/admin/realms/${realm}/clients/${realm}-${clientid}/client-secret`)
    }

    async getClientSecret(realm, clientid) {
        return await this.adminCall('GET', `/admin/realms/${realm}/clients/${realm}-${clientid}/client-secret`)
    }

    async deleteClient(realm, clientid) {
        return await this.adminCall('DELETE', `/admin/realms/${realm}/clients/${realm}-${clientid}`)
    }

    async getUsers(realm) {
        return await this.adminCall('GET', `/admin/realms/${realm}/users`)
    }

    async createUser(realm, mail, password) {
        return await this.adminCall('POST', `/admin/realms/${realm}/users`, KeycloakTemplates.getUsername(mail, password))
    }

    async deleteUser(realm, userid) {
        return await this.adminCall('DELETE', `/admin/realms/${realm}/clients/${userid}`)
    }

    async getIdps(realm) {
        return await this.adminCall('GET', `/admin/realms/${realm}/identity-provider/instances`)
    }

    async createIdp(realm, name, secret, gui) {
        return await this.adminCall('POST', `/admin/realms/${realm}/identity-provider/instances`, KeycloakTemplates.getIdp(name, secret, gui))
    }

    async deleteIdp(realm, name) {
        return await this.adminCall('DELETE', `/admin/realms/${realm}/identity-provider/instances/${nameToID(name)}`)
    }

    /*
    // breaks on Azure
    async verify(realm, jwt) {
        const allKeys = await this.getKeys(realm)
        const key = allKeys.keys.filter(k => k.use === 'sig')[0]
        const parseKey = await parseJwk(key);
        return await jwtVerify(jwt, parseKey)
    }
    */

}

module.exports = Keycloak
