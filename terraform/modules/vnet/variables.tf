variable "name" {
  type = string
}

variable "location" {
  type = string
}

variable "resource_group_name" {
  type = string
}

variable "address_space" {
  type = list(string)
}

variable "dns_servers" {
  type = list(string)
  default = null
}

variable "tags" {
  type = map
  default = null
}

variable "subnets" {
  type = list(object({
    name             = string
    address_prefixes = list(string)
  }))
}
