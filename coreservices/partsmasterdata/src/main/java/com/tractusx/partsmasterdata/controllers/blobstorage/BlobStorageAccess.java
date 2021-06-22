package com.tractusx.partsmasterdata.controllers.blobstorage;

import org.springframework.web.multipart.MultipartFile;
import com.microsoft.azure.storage.*;

public class BlobStorageAccess {
    private final String storageConnectionstring;

    public BlobStorageAccess(String strorageConnectionstring)
    {
        this.storageConnectionstring = strorageConnectionstring;
    }

    public String UploadFile(MultipartFile file, String containerName){
        try {
            var storageAccount = CloudStorageAccount.parse(storageConnectionstring);
            var blobClient = storageAccount.createCloudBlobClient();
            var blobContainer = blobClient.getContainerReference(containerName);
            blobContainer.createIfNotExists();
            var blobReference = blobContainer.getBlockBlobReference(file.getOriginalFilename());

            blobReference.uploadFromByteArray(file.getBytes(),0,file.getBytes().length);

            return blobReference.getUri().getPath();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return "";
    }
}
