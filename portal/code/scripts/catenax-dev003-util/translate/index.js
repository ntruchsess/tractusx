const Translator = require('./Translator');
const { APIResponse } = require('../common/APIResponse');

module.exports = async function (context, req) {

    //const name = req.query.name || (req.body && req.body.name)
    const source = req.params.source
    const target = req.params.target.split(',')

    let status, body

    try {
        const input = req.body || { message: 'Hello, go ahead and send a JSON object' }
        const result = await new Translator(source,target).translate(input)
        context.res = APIResponse.success(result)
    } catch (exc) {
        context.res = APIResponse.error(500, 'error translating', exc)
    }

}
