const { Config } = require('./Config')
const Keycloak = require('../keycloak/Keycloak')

class CatenaxCentral extends Keycloak {

    constructor(base) {
        super(base || Config.KEYCLOAK_CENTRAL)
        this.realm = 'CX-Central'
    }

    getShared() {
        if (!this.shared)
            this.shared = new Keycloak(Config.KEYCLOAK_SHARED)
        return this.shared
    }

    async registerSharedIdp(name) {
        const shared = this.getShared()

        console.log(`[SHARED] creating realm ${name}:`)
        const realm = await shared.createRealm(name)
        console.log(realm)

        console.log(`[SHARED] creating client catenax`)
        const client = await shared.createClient(name, 'catenax')
        console.log(client)

        console.log(`[SHARED] generating client secret:`)
        const secret = await shared.createClientSecret(name, 'catenax')
        console.log(secret)

        const username = `test@${name}.org`
        console.log(`[SHARED] create test user ${username}:`)
        const user = await shared.createUser(name, username, 'changeme')
        console.log(user)

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
