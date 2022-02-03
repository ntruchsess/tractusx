const { Config } = require('./catenax/Config')
const Keycloak = require('./keycloak/Keycloak');
const KC = new Keycloak(Config.KEYCLOAK_CENTRAL);
const KS = new Keycloak(Config.KEYCLOAK_SHARED);

(async () => {
    //const result = await K.authenticate({ realm: 'master', client: 'admin-cli', username: 'admin', password: '' })
    //const result = await K.authenticate({ realm: 'idpfed', client: 'github', username: 'oyo', password: '' })
    //console.log(result)
    //console.log(await K.getIdps('CX-Central'))
    //console.log(await KC.deleteIdp('CX-Central','automated-realm-1'))
    //console.log(await KS.deleteRealm('automated-realm-1'))
    console.log(await KS.getClients('mycompany'))
    //console.log(await KS.deleteRealm('automated-realm-1'))
    //console.log(await K.createIdp('CX-Central','Shared IDP Test 2','secret1234', 103))
})()
