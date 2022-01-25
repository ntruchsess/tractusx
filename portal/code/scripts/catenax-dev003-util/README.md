# UI text translation util

Autmatically translate the JSON objects with locale UI resources into different languages.
Note that automatic translations are generally unreliable and the results
should always be checked and fixed before the language is activated in production.

prepare

    cp .env.default .env
    vi .env #set translator key
    yarn install


run from command line

    echo '{"greeting":"Hello from your translator"}' | node translate/cli de


run as local Azure function

    yarn start    
    curl http://localhost:3000/v1/translate/en/de,it -d '{"message":"good afternoon"}'


run as remote Azure function

    yarn deploy
    curl https://catenax-dev003-util.azurewebsites.net/v1/translate/en/de,bg -d '{"message":"good evening"}'

