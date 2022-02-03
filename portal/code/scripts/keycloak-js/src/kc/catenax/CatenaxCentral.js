const { Config } = require('./Config')
const Keycloak = require('../keycloak/Keycloak')

class CatenaxCentral extends Keycloak {

    constructor(base) {
        super(base || Config.KEYCLOAK_CENTRAL, process.env.KC_CENTRAL_USER, process.env.KC_CENTRAL_PASS)
        this.realm = 'CX-Central'
    }

    getShared() {
        if (!this.shared)
            this.shared = new Keycloak(Config.KEYCLOAK_SHARED, process.env.KC_SHARED_USER, process.env.KC_SHARED_PASS)
        return this.shared
    }

    async listSharedIdps() {
        console.log(await this.getIdps(this.realm))
    }

    async registerSharedIdp(name) {
        const shared = this.getShared()
        const clientName = `${name}-catenax`

        console.log(`[SHARED] creating realm ${name}:`)
        const realm = await shared.createRealm(name)
        console.log(realm)

        console.log(`[SHARED] creating client ${clientName}`)
        const client = await shared.createClient(name, clientName)
        console.log(client)

        console.log(`[SHARED] generating client secret:`)
        const secret = await shared.createClientSecret(name, clientName)
        console.log(secret)

        const username = `test@${name}.org`
        console.log(`[SHARED] create test user ${username}:`)
        const user = await shared.createUser(name, username, 'changeme')
        console.log(user)

        const usernameDD = `donald.duck@bmw.de`
        console.log(`[SHARED] create test user ${usernameDD}:`)
        const userDD = await shared.createUser(name, usernameDD, 'changeme')
        console.log(userDD)

        console.log(`[CENTRAL] create idp federation:`)
        const idp = await this.createIdp(this.realm, name, secret.value, 105)
        console.log(idp)

        return idp
    }

    async unregisterSharedIdp(name) {
        const shared = this.getShared()

        console.log(`[CENTRAL] delete idp federation:`)
        const idp = await this.deleteIdp(this.realm, name)
        console.log(idp)

        console.log(`[SHARED] deleting realm ${name}:`)
        const realm = await shared.deleteRealm(name)
        console.log(realm)

        return idp
    }

}

module.exports = CatenaxCentral
