const CatenaxCentral = require('./kc/catenax/CatenaxCentral');
const C = new CatenaxCentral();

(async () => {
    if (process.argv.length !== 3) {
        console.log('usage: node CreateSharedIDP <company>')
        return
    }
    await C.registerSharedIdp(process.argv[2])
})()
