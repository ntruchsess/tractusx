const { Config } = require('../Config');

const fetch = require('node-fetch');
const httpsProxyAgent = require('https-proxy-agent');

const agent = process && process.env && process.env.https_proxy
    ? httpsProxyAgent(process.env.https_proxy)
    : undefined

const readAsset = async (asset) => {
    const response = await fetch(Config.BLOB_BASE + (asset || 'index.html'));
    const data = await response.text()
    return data;
}

exports.readAsset = readAsset;

//(async () => console.log(await readAsset('index.html')))()
