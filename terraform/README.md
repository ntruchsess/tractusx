# Terraform scripts

Terraform scripts to deploy the Catena-X PoC infrastructure on Microsoft Azure.

## Prerequisites

The following tools need to be installed on your system where you run the scripts:
- [Kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Helm](https://helm.sh/docs/intro/install/)
- [Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli)
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)

## Quick start

Run the following commands to deploy the PoC infrastructure:

1. Sign-on to Azure and select the target subscription for the PoC landscape with `az login`
1. From the main directory of this repository, run `terraform init`
1. Run `terraform plan`
1. Run `terraform apply`