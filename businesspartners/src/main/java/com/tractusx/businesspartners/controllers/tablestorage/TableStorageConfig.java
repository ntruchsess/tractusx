package com.tractusx.businesspartners.controllers.tablestorage;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;


@Configuration
@ConfigurationProperties(prefix = "xy")
public class TableStorageConfig {
    public void setTableName(String tableName) {
        this.tableName = tableName;
    }

    public String tableName;

    public void setStorageConnectionstring(String storageConnectionstring) {
        this.storageConnectionstring = storageConnectionstring;
    }

    public String storageConnectionstring;

}
