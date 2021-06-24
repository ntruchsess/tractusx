package com.tractusx.uploadappadapter.dal;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;


@Configuration
@ConfigurationProperties(prefix = "azstorage")
public class BlobStorageConfiguration {
    public void setStorageConnectionstring(String storageConnectionstring) {
        this.storageConnectionstring = storageConnectionstring;
    }

    public String storageConnectionstring;

    public void setBlobContainerName(String blobContainerName) {
        this.blobContainerName = blobContainerName;
    }

    public String blobContainerName;

}