provider "azurerm" {
}
resource "azurerm_resource_group" "simpleterraform" {
	name = "qwinixterraform"
	location = "southindia"
}

resource "azurerm_storage_account" "simplestorage" {
  account_replication_type  = "LRS"
  account_tier              = "Standard"
  account_kind              = "StorageV2"
  location                  = "southindia"
  name                      = "qwinixsyorage"
  resource_group_name       = "${azurerm_resource_group.simpleterraform.name}"
  enable_https_traffic_only = true
  static_website{
      enabled             = true
      index_document_name = "index.html"
      error_document_path = "error.html"
    }

}
