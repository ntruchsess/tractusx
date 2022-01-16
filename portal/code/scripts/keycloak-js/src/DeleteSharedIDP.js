const CatenaxCentral = require('./kc/catenax/CatenaxCentral');
const C = new CatenaxCentral();

(async () => {
    if (process.argv.length !== 3) {
        console.log('usage: node DeleteSharedIDP <company>')
        return
    }
    await C.unregisterSharedIdp(process.argv[2])
})()
