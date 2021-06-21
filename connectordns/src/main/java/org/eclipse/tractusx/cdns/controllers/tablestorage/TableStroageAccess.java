
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
        "Dns"
    };

    public TableStroageAccess(String strorageConnectionstring)
    {
        this.storageConnectionstring = strorageConnectionstring;
    }

    private String storageConnectionstring;

    public Object GetConnectorDNSMapping(String tableName, String oneId, String storagePartitionKey ){
        try
        {
            // Retrieve storage account from connection-string.
            var storageAccount = CloudStorageAccount.parse(storageConnectionstring);

            // Create the table client.
            var tableClient = storageAccount.createCloudTableClient();

            // Create a cloud table object for the table.
            var cloudTable = tableClient.getTableReference(tableName);

            var query = TableQuery.from(OneIdDNSMapping.class).where("PartitionKey eq '"+storagePartitionKey+ "' and RowKey eq '" +oneId+ "'").select(properties);

            var partnerResolver = new EntityResolver<OneIdDNSMapping>(){
                @Override
                public OneIdDNSMapping resolve(String PartitionKey, String RowKey, Date timeStamp, HashMap<String, EntityProperty> properties, String etag) {

                    var oneIdDnsMapping = new OneIdDNSMapping();
                    oneIdDnsMapping.setRowKey(RowKey);
                    oneIdDnsMapping.Dns = properties.get("Dns").getValueAsString();
                    return oneIdDnsMapping;
                }
            };

            var oneIdDnsMappings = new ArrayList<OneIdDNSMapping>();
            for(OneIdDNSMapping mapping : cloudTable.execute(query, partnerResolver)){
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
