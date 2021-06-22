
package org.eclipse.tractusx.cdns.controllers.tablestorage;

import com.microsoft.azure.storage.*;
import com.microsoft.azure.storage.table.*;
import com.microsoft.azure.storage.table.TableQuery.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;

public class TableStroageAccess {

    String[] properties = new String[]{
        "dns"
    };

    public TableStroageAccess(String strorageConnectionstring)
    {
        this.storageConnectionstring = strorageConnectionstring;
    }

    private String storageConnectionstring;

    public String[] GetConnectorDNSEntry(String tableName,String partitionKey, String rowKey  ){
        try
        {
            // Retrieve storage account from connection-string.
            var storageAccount = CloudStorageAccount.parse(storageConnectionstring);

            // Create the table client.
            var tableClient = storageAccount.createCloudTableClient();

            // Create a cloud table object for the table.
            var cloudTable = tableClient.getTableReference(tableName);

            var query = TableQuery.from(OneIdDNSMapping.class).where("PartitionKey eq '"+partitionKey+ "' and RowKey eq '" +rowKey+ "'").select(properties);

            var dnsArray = new EntityResolver<String[]>(){
                @Override
                public String[] resolve(String PartitionKey, String RowKey, Date timeStamp, HashMap<String, EntityProperty> properties, String etag) {
                    return properties.get("dns").getValueAsString().split(",");
                }
            };

            var oneIdDnsMappings = new ArrayList<String[]>();
            for(String[] mapping : cloudTable.execute(query, dnsArray)){
                oneIdDnsMappings.add(mapping);
            }
            if(oneIdDnsMappings.size()> 0) {
                return oneIdDnsMappings.get(0);
            }
        }
        catch (Exception e)
        {
            // Output the stack trace.
            e.printStackTrace();
        }
        return null;
    }
}
