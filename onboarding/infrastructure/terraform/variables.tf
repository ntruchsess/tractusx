####################################################################################################
# Global variables
####################################################################################################

variable "prefix" {
  type    = string
  default = "catenacax-onboarding"
}

variable "environment" {
  type    = string
  default = "dev"
}

variable "location" {
  type    = string
  default = "germanywestcentral"
}

variable "postegreusername"{
	type = string
	default = "psqladminun"
}

variable "postegrepassword"{
	type = string
	default = ""
}

