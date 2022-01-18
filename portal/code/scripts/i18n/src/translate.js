require('dotenv').config()
const fs = require('fs')
const axios = require('axios').default
const { v4: uuidv4 } = require('uuid')
let languages = process.argv.slice(2)
if (languages.length === 0)
languages = undefined

const ENDPOINT = 'https://api.cognitive.microsofttranslator.com'
const SOURCE_LANGUAGE = process.env.SOURCE_LANGUAGE || 'en'
const TARGET_LANGUAGES = languages || process.env.TARGET_LANGUAGES.split(/\s+/) || ['de']

const translateRequest = msg => ({
    baseURL: ENDPOINT,
    url: '/translate',
    method: 'post',
    headers: {
        'ocp-apim-subscription-key': process.env.SUBSCRIPTION_KEY,
        'ocp-apim-subscription-region': process.env.REGION,
        'content-type': 'application/json',
        'x-clienttraceid': uuidv4().toString()
    },
    params: {
        'api-version': '3.0',
        'from': SOURCE_LANGUAGE,
        'to': TARGET_LANGUAGES
    },
    data: msg,
    responseType: 'json'
})

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

const translate = async msg => {
    const flat = flatten(msg)
    const keys = Object.keys(flat)
    const input = keys.reduce((o, k) => {
        o.push({ text: flat[k] });
        return o
    }, [])
    try {
        const result = await axios(
            translateRequest(input)
        )
        const bylang = result.data.map(r =>
            r.translations.reduce((o, t) => {
                o[t.to] = t.text;
                return o
            }, {})
        )
        return TARGET_LANGUAGES.reduce((o, l) => {
            o[l] = keys.reduce((o, k, i) => {
                o[k] = bylang[i][l];
                return o
            }, {});
            return o
        }, {})
    } catch (exc) {
        return exc
    }
}

    ; (async () => {
        const source = JSON.parse(fs.readFileSync(0).toLocaleString())
        console.log(JSON.stringify(source, null, 4));
        console.log(`translating from ${JSON.stringify(SOURCE_LANGUAGE)} to ${JSON.stringify(TARGET_LANGUAGES)}`)
        const translated = await translate(source)
        for (let lang of Object.keys(translated))
            console.log(lang + ': ' + JSON.stringify(unflatten(translated[lang]), null, 4))
    })()
