# UI text translation util

Autmatically translate the JSON objects with locale UI resources into different languages.
Note that automatic translations are generally unreliable and the results
should always be checked and fixed before the language is activated in production.

run from command line

    yarn install
    cp .env.default .env
    vi .env #add subscription key
    cat resources/hello.json | node src/translate.js de it
        {
            "greeting": "Hello, World!"
        }
        translating from "en" to ["de","it"]
        de: {
            "greeting": "Hallo Welt!"
        }
        it: {
            "greeting": "Salve, mondo!"
        }


run as Azure function

    ...
