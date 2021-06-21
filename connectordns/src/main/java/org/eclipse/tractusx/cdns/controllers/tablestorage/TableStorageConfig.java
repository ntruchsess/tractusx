package org.eclipse.tractusx.cdns.controllers.tablestorage;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;


@Configuration
@ConfigurationProperties(prefix = "xy")
public class TableStorageConfig {

    public void setPartitionKey(String partitionKey) {
        this.partitionKey = partitionKey;
    }
    public String partitionKey;

    public void setMappingTableName(String mappingTableName) {
        this.mappingTableName = mappingTableName;
    }

    public String mappingTableName;

    public void setStorageConnectionstring(String storageConnectionstring) {
        this.storageConnectionstring = storageConnectionstring;
    }

    public String storageConnectionstring;

}
