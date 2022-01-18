# UI text translation util

Autmatically translate the JSON objects with locale UI resources into different languages.
Note that automatic translations are generally unreliable and the results
should always be checked and fixed before the language is activated in production.

run

    yarn install
    cp .env.default .env
    vi .env #add subscription key
    cat resources/hello.json | node src/translate.js de fr es it ja
        {
            "greeting": "Hello, World!"
        }
        translating from "en" to ["de","fr","es","it","ja"]
        de: {
            "greeting": "Hallo Welt!"
        }
        fr: {
            "greeting": "Salut tout le monde!"
        }
        es: {
            "greeting": "¡Hola mundo!"
        }
        it: {
            "greeting": "Salve, mondo!"
        }
        ja: {
            "greeting": "ハローワールド！"
        }
