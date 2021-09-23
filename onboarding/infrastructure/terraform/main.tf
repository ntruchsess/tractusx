####################################################################################################
# Shared infrastructure (resource group, monitoring, ...)
####################################################################################################

resource "azurerm_resource_group" "default_rg" {
  name     = "${var.prefix}-${var.environment}-rg"
  location = var.location

  tags = {
    environment = "${var.environment}"
  }
}

####################################################################################################
# PostgreSQL Server and database
####################################################################################################

resource "azurerm_postgresql_server" "onboardingserver" {
  name                = "postgresql-server-1"
  location            = azurerm_resource_group.default_rg.location
  resource_group_name = azurerm_resource_group.default_rg.name

  sku_name = "B_Gen5_2"

  storage_mb                   = 15360
  backup_retention_days        = 7
  geo_redundant_backup_enabled = false
  auto_grow_enabled            = true

  administrator_login          = "${var.postegreusername}"
  administrator_login_password = "${var.postegrepassword}"
  version                      = "9.5"
  ssl_enforcement_enabled      = true
}

resource "azurerm_postgresql_database" "onboarding" {
  name                = "onboarding"
  resource_group_name = azurerm_resource_group.default_rg.name
  server_name         = azurerm_postgresql_server.onboardingserver.name
  charset             = "UTF8"
  collation           = "English_United States.1252"
}

resource "azurerm_postgresql_database" "membercompany" {
  name                = "membercompany"
  resource_group_name = azurerm_resource_group.default_rg.name
  server_name         = azurerm_postgresql_server.onboardingserver.name
  charset             = "UTF8"
  collation           = "English_United States.1252"
}

resource "azurerm_postgresql_database" "consents" {
  name                = "consents"
  resource_group_name = azurerm_resource_group.default_rg.name
  server_name         = azurerm_postgresql_server.onboardingserver.name
  charset             = "UTF8"
  collation           = "English_United States.1252"
}