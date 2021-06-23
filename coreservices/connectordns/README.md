# Connector Domain Name Service (DNS)

Connector "DNS" for the Catena-X PoC.

## Prerequisites

The following tools need to be installed on the system where you run the deployment:
- [Apache Maven](https://maven.apache.org/install.html)
- [Docker Desktop](https://docs.docker.com/desktop/)
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/)

## Manual deployment

Follow these steps to build and deploy the Connector DNS service:
1. Run `mvn package`
1. Build the docker image with `docker build -t catenaxdevacr.azurecr.io/tractusx/cdns:v1 .`
1. Login to Azure Container Registry with `docker login catenaxdevacr.azurecr.io`. See Azure Portal for credentials.
1. Push the image with `docker push catenaxdevacr.azurecr.io/tractusx/cdns:v1`
1. Login to Kubernetes cluster (AKS):
    1. `az login`
    1. `az aks get-credentials --resource-group catenax-<landscape>-rg --name catenax-<landscape>-aks-services`. Replace <landscape> with the target landscape of your choice, e.g. dev, staging, prod
1. Deploy the service to AKS with `kubectl apply -f .\cdns.yaml -n cdns`
1. Deploy the ingress route to the service with `kubectl apply -f .\cdns-ingress.yaml -n cdns`
1. Check if the service is running with `https://catenax<landscape>akssrv.germanywestcentral.cloudapp.azure.com/cdns`

## Automated deployment with Azure Pipelines

GitHub actions are setup for this service to automate the steps above. Please see [here](../.github/workflows/main.yml) for details.