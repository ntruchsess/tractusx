const fs = require('fs');
const Translator = require('./Translator');

(async () => {
    try {
        const source = 'en'
        const target = process.argv.length > 2 ? process.argv.slice(2) : undefined
        const input = JSON.parse(fs.readFileSync(0).toLocaleString())
        const translated = await (new Translator(source, target)).translate(input)
        console.log(JSON.stringify(translated, null, 4))
    } catch (exc) {
        console.log(exc)
    }
})()
