#!/bin/bash

#
# bash functions to create the catena-x util env
# usage:
#    source ./scripts/util.sh
#
# first invocation:
#    create-storage
#    create-container ${CX_CONTAINER} 
#

export CX_ENV=dev003
export CX_RG=catenax-${CX_ENV}-rg
export CX_ACCOUNT=catenax${CX_ENV}util
export CX_CONTAINER=util
export LOCATION=germanywestcentral

get-account-key() {
    az storage account keys list \
        --resource-group $CX_RG \
        --account-name $CX_ACCOUNT \
        --query '[0].value' -o tsv
}

export CX_ACCOUNT_KEY=$(get-account-key)

create-account() {
    az storage account create \
        --name ${CX_ACCOUNT} \
        --resource-group ${CX_RG} \
        --kind StorageV2 \
        --location ${LOCATION} \
        --allow-blob-public-access true \
        -o table
    export CX_ACCOUNT_KEY=$(get-account-key)
}

create-container() {
    az storage container create \
        --name $1 \
        --account-name ${CX_ACCOUNT} \
        --account-key ${CX_ACCOUNT_KEY} \
        --public-access blob \
        -o table
}

create-share() {
    az storage share create \
        --name $1 \
        --account-name ${CX_ACCOUNT} \
        --account-key ${CX_ACCOUNT_KEY} \
        -o table
}

list-container() {
    az storage container list \
        --account-name ${CX_ACCOUNT} \
        --account-key ${CX_ACCOUNT_KEY} \
        -o table
}

list-blobs() {
    az storage blob list \
        --account-name ${CX_ACCOUNT} \
        --account-key ${CX_ACCOUNT_KEY} \
        --container-name $1 \
        -o table
}

delete-blob() {
    az storage blob delete \
        --account-name ${CX_ACCOUNT} \
        --account-key ${CX_ACCOUNT_KEY} \
        --container-name $1 \
        --name $2 \
        -o table
}

deploy-theme() {
    az storage blob upload-batch \
        --account-name ${CX_ACCOUNT} \
        --account-key ${CX_ACCOUNT_KEY} \
        --destination ${CX_CONTAINER} \
        --destination-path themes \
        --source ./themes \
	--overwrite \
        -o table
}

