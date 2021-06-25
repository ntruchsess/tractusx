
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
    };

    public TableStroageAccess(String strorageConnectionstring)
    {
        this.storageConnectionstring = strorageConnectionstring;
    }

    private String storageConnectionstring;

    public ArrayList<ConnectorDNSRecord> GetConnectorDNSEntry(String tableName,String businessPartnerOneId, String connectorId  ){
        try
        {
            var isBusinesspartnerId =false;
            // Retrieve storage account from connection-string.
            var storageAccount = CloudStorageAccount.parse(storageConnectionstring);

            // Create the table client.
            var tableClient = storageAccount.createCloudTableClient();

            // Create a cloud table object for the table.
            var cloudTable = tableClient.getTableReference(tableName);

            var queryString = "";
            if(businessPartnerOneId!=null && !businessPartnerOneId.isEmpty()){
                queryString = "PartitionKey eq '"+businessPartnerOneId+"'";
                isBusinesspartnerId = true;
            }
            else{
                queryString = "RowKey eq '"+connectorId+"'";
            }


            var query = TableQuery.from(OneIdDNSMapping.class).where(queryString).select(properties);

            var dnsArray = new EntityResolver<OneIdDNSMapping>(){
                @Override
                public OneIdDNSMapping resolve(String PartitionKey, String RowKey, Date timeStamp, HashMap<String, EntityProperty> properties, String etag) {
                    var mapping = new OneIdDNSMapping();
                    mapping.setPartitionKey(PartitionKey);
                    mapping.setRowKey(RowKey);
                    return mapping;
                }
            };
            var oneIdDnsMappings = new ArrayList<ConnectorDNSRecord>();
            if(isBusinesspartnerId) {

                for(OneIdDNSMapping mapping : cloudTable.execute(query, dnsArray)){
                    var connector = new ConnectorDNSRecord();
                            connector.idsConnectorID = mapping.getRowKey();
                            connector.oneID = mapping.getPartitionKey();

                    oneIdDnsMappings.add(connector);
                }
            }
            else{
                for(OneIdDNSMapping mapping : cloudTable.execute(query, dnsArray)){
                    var connector = new ConnectorDNSRecord();
                    connector.idsConnectorID = mapping.getRowKey();
                    connector.oneID = mapping.getPartitionKey();

                    oneIdDnsMappings.add(connector);
                    break;
                }
            }
    return  oneIdDnsMappings;
        }
        catch (Exception e)
        {
            // Output the stack trace.
            e.printStackTrace();
        }
        return null;
    }
}
