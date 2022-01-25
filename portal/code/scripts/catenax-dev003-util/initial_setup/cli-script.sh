#!/bin/bash

export CAX_ENV=dev003

install-functions-cli-mac () {
    brew tap azure/functions
    brew install azure-functions-core-tools@4
    # if upgrading on a machine that has 2.x or 3.x installed:
    brew link --overwrite azure-functions-core-tools@4
} 

init-function () {
    export FUNC=catenax-${CAX_ENV}-util
    func init $FUNC --javascript
    cd $FUNC
}

add-function () {
    func new --name $1 --template "HTTP trigger" --authlevel "anonymous"
}

start-function () {
    func start --port 3000
}

#install-functions-cli-mac
#init-function
#add-function translate

