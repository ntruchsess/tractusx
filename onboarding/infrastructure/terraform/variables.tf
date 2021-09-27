####################################################################################################
# Global variables
####################################################################################################

variable "location" {
  type    = string
  default = "germanywestcentral"
}

variable "prefix" {
  type    = string
  default = "catenax-speedboat-onboarding"
}

variable "environment" {
  type    = string
  default = "dev"
}

variable "psql_size_mb" {
  type    = number
  default = 5120
}

variable "psql_username" {
  type    = string
  default = "psqladmin"
}

variable "psql_password" {
  type      = string
  default   = "psql-passw0rd-changeme"
  sensitive = true
}

