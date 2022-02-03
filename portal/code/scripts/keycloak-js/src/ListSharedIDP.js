const CatenaxCentral = require('./kc/catenax/CatenaxCentral');
const C = new CatenaxCentral();

(async () => {
    if (process.argv.length !== 2) {
        console.log('usage: node ListSharedIDP')
        return
    }
    await C.listSharedIdps()
})()
