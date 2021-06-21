
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
  "JsonObject"
    };

    public TableStroageAccess(String strorageConnectionstring)
    {
        this.storageConnectionstring = strorageConnectionstring;
    }

    private String storageConnectionstring;

    public BusinessPartner GetBusinessPartner(String tableName, String businessPartnerOneId){
        try
        {
            // Retrieve storage account from connection-string.
            var storageAccount = CloudStorageAccount.parse(storageConnectionstring);

            // Create the table client.
            var tableClient = storageAccount.createCloudTableClient();

            // Create a cloud table object for the table.
            var cloudTable = tableClient.getTableReference(tableName);


            var query = TableQuery.from(BusinessPartner.class).where("PartitionKey eq '"+tableName+ "' and RowKey eq '" +businessPartnerOneId+ "'").select(properties);

            var partnerResolver = new EntityResolver<BusinessPartner>(){
                @Override
                public BusinessPartner resolve(String PartitionKey, String RowKey, Date timeStamp, HashMap<String, EntityProperty> properties, String etag) {
                    var b = new BusinessPartner();
                    b.JsonObject = properties.get( "JsonObject").getValueAsString();
                    return b;
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
