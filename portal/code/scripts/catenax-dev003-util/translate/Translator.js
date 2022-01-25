require('dotenv').config()
const axios = require('axios').default
const { v4: uuidv4 } = require('uuid')

const ENDPOINT = 'https://api.cognitive.microsofttranslator.com'

const flatten = (obj, path = '') => {
    if (!(obj instanceof Object)) return { [path.replace(/\.$/g, '')]: obj }
    return Object.keys(obj).reduce((output, key) => {
        return obj instanceof Array ?
            { ...output, ...flatten(obj[key], path + '[' + key + '].') } :
            { ...output, ...flatten(obj[key], path + key + '.') }
    }, {});
}

const unflatten = data => {
    var result = {}
    for (var i in data) {
        var keys = i.split('.')
        keys.reduce(function (r, e, j) {
            return r[e] || (r[e] = isNaN(Number(keys[j + 1])) ? (keys.length - 1 == j ? data[i] : {}) : [])
        }, result)
    }
    return result
}

class Translator {

    constructor(source, target) {
        this.source = source || 'en'
        this.target = target || ['de']
    }

    translateRequest(msg) {
        return {
            baseURL: ENDPOINT,
            url: '/translate',
            method: 'post',
            headers: {
                'ocp-apim-subscription-key': process.env.TRANSLATOR_KEY,
                'ocp-apim-subscription-region': process.env.AZURE_REGION || 'germanywestcentral',
                'content-type': 'application/json',
                'x-clienttraceid': uuidv4().toString()
            },
            params: {
                'api-version': '3.0',
                'from': this.source,
                'to': this.target
            },
            data: msg,
            responseType: 'json'
        }
    }

    async translate(msg) {
        const flat = flatten(msg)
        const keys = Object.keys(flat)
        const input = keys.reduce((o, k) => {
            o.push({ text: flat[k] });
            return o
        }, [])
        const result = await axios(
            this.translateRequest(input)
        )
        const bylang = result.data.map(r =>
            r.translations.reduce((o, t) => {
                o[t.to] = t.text;
                return o
            }, {})
        )
        return unflatten(
            this.target.reduce((o, l) => {
                o[l] = keys.reduce((o, k, i) => {
                    o[k] = bylang[i][l];
                    return o
                }, {});
                return o
            }, {})
        )
    }

}

module.exports = Translator
