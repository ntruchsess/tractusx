#!/bin/bash
#
# create two nested subdomains:
#   - portal(-dev).demo.catena-x.net
#   - iam.portal(-dev).demo.catena-x.net
#
# requires:
#   - permissions to read AKS kubernetes parameters and write DNS entries
#   - bash, zsh, etc.
#   - Azure CLI
#   - kubectl
#   - jq
#
# input:
#   - env variable CX_ENV=(dev003|int)
# output:
#   - first zone name server set to be registered with parent domain demo.catena-x.net
#
export DOMAIN_SUPER="demo.catena-x.net"
export CX_ENV=${CX_ENV:-dev003}
export ENV_SUFFIX=$([ "$CX_ENV" = "int" ] && echo "" || echo "-dev" )
export CX_RG="catenax-${CX_ENV}-rg"
export CX_AKS="catenax-${CX_ENV}-aks-services"
az aks get-credentials -g $CX_RG -n $CX_AKS --overwrite-existing

#
# get portal ip and create subdomain plus A record
#
export DOMAIN_PORTAL="portal${ENV_SUFFIX}.${DOMAIN_SUPER}"
export IP_PORTAL=$(kubectl get services --namespace ingress-portal -o json \
  | jq ".items[].status.loadBalancer | select (.ingress) | .ingress[].ip" -r)
export NS_PORTAL=$(az network dns zone create --if-none-match -g $CX_RG -n $DOMAIN_PORTAL \
  | jq ".nameServers" -r)
export A_PORTAL=$(az network dns record-set a add-record -g $CX_RG -z $DOMAIN_PORTAL -n www -a $IP_PORTAL)

#
# get keycloak central ip and create subdomain plus A record
#
export DOMAIN_IAM="iam.${DOMAIN_PORTAL}"
export IP_IAM=$(kubectl get services --namespace ingress-service -o json \
  | jq ".items[].status.loadBalancer | select (.ingress) | .ingress[].ip" -r)
export NS_IAM=$(az network dns zone create --if-none-match -g $CX_RG -n $DOMAIN_IAM -p $DOMAIN_PORTAL \
  | jq ".nameServers" -r)
export A_IAM=$(az network dns record-set a add-record -g $CX_RG -z $DOMAIN_IAM -n www -a $IP_IAM)

#
# output the upper name server set to register with the parent domain
#
echo "register a ns record set at ${DOMAIN_SUPER} with these servers"
echo $NS_PORTAL
echo ""
echo "# Azure CLI commands"
export DEMO_RG="resource-group-of-demo.catena-x.net"
export NAME_SUB="portal${ENV_SUFFIX}"
echo "az network dns record-set ns create --if-none-match -g $DEMO_RG -z $DOMAIN_SUPER -n $NAME_SUB"
echo $NS_PORTAL | jq -c '.[]' | while read n; do
   echo "az network dns record-set ns add-record -g $DEMO_RG -z $DOMAIN_SUPER -n $NAME_SUB -d ${n}"
done

