const { AssetResponse } = require('./AssetResponse');
const { Config } = require('../Config');
const { readAsset } = require('./AssetReader');

module.exports = async function (context, req) {
  const key = req.url.replace(process.env.BASE_PATTERN, '').split('?')[0]
  console.log(req.method + ' ' + key)
  try {
    const value = await readAsset(key)
    context.res = AssetResponse.success(value, key)
  } catch (error) {
    context.res = AssetResponse.error(404, 'error reading asset', error, key);
  }
}