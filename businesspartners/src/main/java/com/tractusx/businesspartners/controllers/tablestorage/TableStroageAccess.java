
package com.tractusx.businesspartners.controllers.tablestorage;

import com.microsoft.azure.storage.*;
import com.microsoft.azure.storage.table.*;
import com.microsoft.azure.storage.table.TableQuery.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;

public class TableStroageAccess {

    String[] properties = new String[]{
            "customerContractOneId",
            "customerOneId",
            "customerUniqueId",
            "manufacturerContractOneId",
            "manufacturerOneId",
            "manufacturerUniqueId",
            "partNameCustomer",
            "partNameManufacturer",
            "partNumberCustomer",
            "partNumberManufacturer",
            "productionCountryCode",
           "productionDateGmt",
            "qualityAlert",
            "qualityType",
            "uniqueId",
            "isParentOfString"
    };

    public TableStroageAccess(String strorageConnectionstring )
    {
        this.storageConnectionstring = strorageConnectionstring;

    }

    private String storageConnectionstring;

    public BusinessPartner GetBusinessPartner(String tableName, String customerOneId, String uniqueId){
        try
        {
            // Retrieve storage account from connection-string.
            var storageAccount = CloudStorageAccount.parse(storageConnectionstring);

            // Create the table client.
            var tableClient = storageAccount.createCloudTableClient();

            // Create a cloud table object for the table.
            var cloudTable = tableClient.getTableReference(tableName);


            var query = TableQuery.from(BusinessPartner.class).where("PartitionKey eq '"+customerOneId+ "' and RowKey eq '" +uniqueId+ "'").select(properties);

            var partnerResolver = new EntityResolver<BusinessPartner>(){
                @Override
                public BusinessPartner resolve(String PartitionKey, String RowKey, Date timeStamp, HashMap<String, EntityProperty> properties, String etag) {

                    var businessPartner = new BusinessPartner();
                    businessPartner.setRowKey(RowKey);
                    businessPartner.setEtag(etag);
                    businessPartner.setPartitionKey(PartitionKey);
                    businessPartner.customerContractOneId = properties.get("customerContractOneId").getValueAsString();
                    businessPartner.productionDateGmt = properties.get("productionDateGmt").getValueAsString();
                    businessPartner.manufacturerContractOneId = properties.get("manufacturerContractOneId").getValueAsString();
                    businessPartner.customerOneId = properties.get("customerOneId").getValueAsString();
                    businessPartner.customerUniqueId = properties.get("customerUniqueId").getValueAsString();
                    businessPartner.manufacturerOneId = properties.get("manufacturerOneId").getValueAsString();
                    businessPartner.manufacturerUniqueId = properties.get("manufacturerUniqueId").getValueAsString();
                    businessPartner.partNameCustomer = properties.get("partNameCustomer").getValueAsString();
                    businessPartner.partNameManufacturer = properties.get("partNameManufacturer").getValueAsString();
                    businessPartner.partNumberCustomer = properties.get("partNumberCustomer").getValueAsString();
                    businessPartner.partNumberManufacturer = properties.get("partNumberManufacturer").getValueAsString();
                    businessPartner.productionCountryCode = properties.get("productionCountryCode").getValueAsString();
                    businessPartner.qualityAlert = properties.get("manufacturerUniqueId").getValueAsBoolean();
                    businessPartner.qualityType = properties.get("qualityType").getValueAsString();
                    businessPartner.uniqueId = properties.get("uniqueId").getValueAsString();
                    businessPartner.isParentOf = properties.get("isParentOfString").getValueAsString().split(",");
                    return businessPartner;
                }
            };

           var partners = new ArrayList<BusinessPartner>();
            for(BusinessPartner partner : cloudTable.execute(query, partnerResolver)){
                    partners.add(partner);
            }

          return partners.get(0);
        }
        catch (Exception e)
        {
            // Output the stack trace.
            e.printStackTrace();
        }
        return null;
    }
}
