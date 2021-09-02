#
# Copyright (c) 2021 T-Systems International GmbH (Catena-X Consortium)
#
# See the AUTHORS file(s) distributed with this work for additional
# information regarding authorship.
#
# See the LICENSE file(s) distributed with this work for
# additional information regarding license terms.
#

#
# Shell script to perform a manual deployment once terraform has done its work
# Should only be run in "homoeopathic" doses
#
# Secrets and environmental informations need to be set via environment variables
##Docker Registry
#export REGISTRY=tsicatenaxdevacr.azurecr.io
##Image Versions
#export VERSION=latest
##User for service/servers
#export HTTPUSER=
##Password for service/servers
#export HTTPPASSWORD=    
##External Volumes/Storage Connection
#export STORAGEACCOUNT_CONNECTIONSTRING=
##External Database Connection User
#export POSTGREPARTSMASTERPASSWORD=
##External Database Connection Password
#export POSTGREPARTSMASTERURL=
##In case you are living behind a proxy
#export HTTP_PROXY_HOST=yourproxy.corporate.net
#export HTTP_PROXY_PORT=8080
#export PROXY=http://yourproxy.corporate.net:8080
##domain name of the final frontend
#export PORTAL=tsicatenaxdevaksportalsrv
## Application ID as registered in AAD
#export APIID=

cd ../../coreservices/connectordns
mvn install -DskipTests
docker build -t $REGISTRY/cdns:$VERSION .
docker push $REGISTRY/cdns:$VERSION

cd ../../infrastructure/pipelines

kubectl create namespace cdns

kubectl create secret generic cdns-secret -n cdns --from-literal=http_basic_auth_password=${HTTPPASSWORD} --from-literal=storage_connectionstring=${STORAGEACCOUNT_CONNECTIONSTRING} --dry-run=client -o yaml \
    | kubectl apply -f -

kubectl apply -f ../manifests/cdns.yaml -n cdns

kubectl apply -f ../manifests/cdns-ingress.yaml -n cdns

cd ../../coreservices/businesspartners

mvn package -DskipTests
docker build -t $REGISTRY/businesspartners:$VERSION .
docker push $REGISTRY/businesspartners:$VERSION

cd ../../infrastructure/pipelines

kubectl create namespace businesspartners

kubectl create secret generic businesspartners-secret -n businesspartners --from-literal=http_basic_auth_password=${HTTPPASSWORD} --from-literal=storage_connectionstring=${STORAGEACCOUNT_CONNECTIONSTRING} --dry-run=client -o yaml \
    | kubectl apply -f -

kubectl apply -f ../manifests/businesspartners.yaml -n businesspartners

kubectl apply -f ../manifests/businesspartners-ingress.yaml -n businesspartners

cd ../../coreservices/partsmasterdata
mvn package -DskipTests
docker build -t $REGISTRY/partsmasterdata:$VERSION .
docker push $REGISTRY/partsmasterdata:$VERSION

cd ../../coreservices/kmuuploadapp
mvn package -DskipTests
docker build -t $REGISTRY/uploadappadapter:$VERSION .
docker push $REGISTRY/uploadappadapter:$VERSION

cd ../../infrastructure/pipelines

kubectl create namespace partsmasterdata

kubectl create secret generic partsmasterdata-secret -n partsmasterdata --from-literal=http_basic_auth_password=${HTTPPASSWORD} --from-literal=postgres_partsmaster_url=${POSTGREPARTSMASTERURL} --from-literal=postgre_partsmaster_user=${HTTPUSER}  --from-literal=postgre_partsmaster_password=${POSTGREPARTSMASTERPASSWORD} --from-literal=postgre_partsmaster_db=partsmaster  --dry-run=client -o yaml \
    | kubectl apply -f -

kubectl apply -f ../manifests/partsmasterdata.yaml -n partsmasterdata

kubectl apply -f ../manifests/partsmasterdata-ingress.yaml -n partsmasterdata

cd ../../infrastructure/pipelines

kubectl create secret generic uploadappadapter-secret -n partsmasterdata --from-literal=storage_connectionstring=${STORAGEACCOUNT_CONNECTIONSTRING} --from-literal=postgre_upload_user=${HTTPUSER} --from-literal=http_basic_auth_password=${HTTPPASSWORD}  --from-literal=postgres_upload_url=${POSTGREPARTSMASTERURL} --from-literal=postgre_upload_password=${POSTGREPARTSMASTERPASSWORD} --from-literal=postgre_upload_db=upload --from-literal=aad_api_id_uri=${APIID} --from-literal=aad_client_id=${APIID}  --dry-run=client -o yaml \
    | kubectl apply -f -

kubectl apply -f ../manifests/uploadapp.yaml -n partsmasterdata

kubectl apply -f ../manifests/uploadapp-ingress.yaml -n partsmasterdata

cd ../../coreservices/simplescheduler
mvn package -DskipTests
docker build -t $REGISTRY/simplescheduler:$VERSION .
docker push $REGISTRY/simplescheduler:$VERSION

cd ../../infrastructure/pipelines

kubectl create namespace centralconnector

kubectl create secret generic simplescheduler-secret -n centralconnector --from-literal=connector_login=${HTTPUSER} --from-literal=connector_password=${HTTPPASSWORD}  --dry-run=client -o yaml \
    | kubectl apply -f -

kubectl apply -f ../manifests/simplescheduler.yaml -n centralconnector

cd ../../portal/code/tractus-x-portal

docker build --build-arg HTTP_PROXY=$PROXY --build-arg HTTPS_PROXY=$PROXY -t $REGISTRY/portal:$VERSION .
docker push $REGISTRY/portal:$VERSION

cd ../../../infrastructure/pipelines

helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

--set controller.nodeSelector."kubernetes\.io/os"=linux \
    --set controller.image.registry=$ACR_URL \
    --set controller.image.image=$CONTROLLER_IMAGE \
    --set controller.image.tag=$CONTROLLER_TAG \
    --set controller.image.digest="" \
    --set controller.admissionWebhooks.patch.nodeSelector."kubernetes\.io/os"=linux \
    --set controller.admissionWebhooks.patch.image.registry=$ACR_URL \
    --set controller.admissionWebhooks.patch.image.image=$PATCH_IMAGE \
    --set controller.admissionWebhooks.patch.image.tag=$PATCH_TAG \
    --set defaultBackend.nodeSelector."kubernetes\.io/os"=linux \
    --set defaultBackend.image.registry=$ACR_URL \
    --set defaultBackend.image.image=$DEFAULTBACKEND_IMAGE \
    --set defaultBackend.image.tag=$DEFAULTBACKEND_TAG \
    
kubectl create namespace ingress-portal

helm install nginx-ingress ingress-nginx/ingress-nginx \
    --namespace ingress-portal \
    --set controller.replicaCount=1 \
    --set controller.service.loadBalancerIP=20.79.116.193 \
    --set controller.service.annotations."service\.beta\.kubernetes\.io/azure-dns-label-name"=$PORTAL \
    --set controller.ingressClass=nginx-portal 

kubectl create namespace portal

kubectl apply -f ../manifests/portal.yaml -n portal

kubectl rollout restart deployment portal -n portal

kubectl apply -f ../manifests/portal-ingress.yaml -n portal

cd ../../semantics
mvn package -DskipTests
docker build -t $REGISTRY/semantics:$VERSION .
docker push $REGISTRY/semantics:$VERSION

cd ../infrastructure/pipelines

kubectl create namespace semantics

kubectl apply -f ../manifests/semantics.yaml -n semantics

kubectl rollout restart deployment semantics -n semantics

kubectl create secret generic semantics-secret -n semantics --from-literal=http_basic_auth_password=${HTTPPASSWORD}  --dry-run=client -o yaml \
    | kubectl apply -f -

kubectl apply -f ../manifests/semantics-ingress.yaml -n semantics
