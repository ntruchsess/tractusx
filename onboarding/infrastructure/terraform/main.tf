####################################################################################################
# Shared infrastructure (resource group, monitoring, ...)
####################################################################################################

resource "azurerm_resource_group" "_" {
  name     = "${var.prefix}-${var.environment}-rg"
  location = var.location

  tags = {
    environment = var.environment
  }
}

####################################################################################################
# PostgreSQL Server and database
####################################################################################################

resource "azurerm_postgresql_server" "_" {
  name                = "${var.prefix}-${var.environment}-psql"
  location            = azurerm_resource_group._.location
  resource_group_name = azurerm_resource_group._.name

  sku_name = "B_Gen5_2"

  storage_mb                   = var.psql_size_mb
  backup_retention_days        = 7
  geo_redundant_backup_enabled = false
  auto_grow_enabled            = true

  administrator_login          = var.psql_username
  administrator_login_password = var.psql_password
  version                      = "11"
  ssl_enforcement_enabled      = true
}

resource "azurerm_postgresql_firewall_rule" "_" {
  name                = "allow_all"
  resource_group_name = azurerm_resource_group._.name
  server_name         = azurerm_postgresql_server._.name
  start_ip_address    = "0.0.0.0"
  end_ip_address      = "255.255.255.255"
}

resource "azurerm_postgresql_database" "onboarding" {
  name                = "onboarding"
  resource_group_name = azurerm_resource_group._.name
  server_name         = azurerm_postgresql_server._.name
  charset             = "UTF8"
  collation           = "English_United States.1252"
}

resource "azurerm_postgresql_database" "membercompany" {
  name                = "membercompany"
  resource_group_name = azurerm_resource_group._.name
  server_name         = azurerm_postgresql_server._.name
  charset             = "UTF8"
  collation           = "English_United States.1252"
}

resource "azurerm_postgresql_database" "consents" {
  name                = "consents"
  resource_group_name = azurerm_resource_group._.name
  server_name         = azurerm_postgresql_server._.name
  charset             = "UTF8"
  collation           = "English_United States.1252"
}