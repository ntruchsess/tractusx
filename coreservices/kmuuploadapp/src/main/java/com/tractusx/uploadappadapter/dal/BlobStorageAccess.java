package com.tractusx.uploadappadapter.dal;

import com.microsoft.azure.storage.CloudStorageAccount;
import com.microsoft.azure.storage.blob.CloudBlobClient;
import com.microsoft.azure.storage.blob.CloudBlobContainer;
import com.microsoft.azure.storage.blob.CloudBlockBlob;
import org.springframework.web.multipart.MultipartFile;

import java.net.URISyntaxException;
import java.security.InvalidKeyException;
import java.util.function.Function;

public class BlobStorageAccess {
    private final String storageConnectionstring;


    public BlobStorageAccess(String strorageConnectionstring)
    {
        this.storageConnectionstring = strorageConnectionstring;
    }

    /*public MultipartFile DownloadNewFile(String containerName)
    {
        try
        {
          CloudBlobClient client = GetBlobClient();

          var blockBlobReference = GetContainer("name").getBlockBlobReference("test");

          try (ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {
              blockBlobReference.download(outputStream);
              File mpF = File. ((outputStream);
            } catch (IOException e) {
                e.printStackTrace();
            }


        }
        catch(Exception ex)
        {
            ex.printStackTrace();
        }
    }*/



    public String UploadFile(MultipartFile file, String containerName){
        String fileUri = "";
        try {
            var blobContainer = GetContainer(containerName);
            String fileName = file.getOriginalFilename();
            CloudBlockBlob blob = blobContainer.getBlockBlobReference(fileName);

            if(blob != null) {
                blob.uploadFromByteArray(file.getBytes(), 0, file.getBytes().length);
                fileUri = blob.getUri().getPath();
            }

        }
        catch(Exception e){
            e.printStackTrace();
        }
        return fileUri;
    }






    private Function<String, String> mapToItem = (line) -> {

        /*String[] p = line.split(COMMA);// a CSV has comma separated lines

        YourJavaItem item = new YourJavaItem();

        item.setItemNumber(p[0]);//<-- this is the first column in the csv file
        if (p[3] != null && p[3].trim().length() > 0) {
            item.setSomeProeprty(p[3]);
        }
        //more initialization goes here

        return item;*/
        return line;

    };

    private CloudBlobContainer GetContainer(String containerName)
    {
        CloudBlobContainer retVal = null;

        try {

            retVal = GetBlobClient().getContainerReference(containerName);
            retVal.createIfNotExists();
        }
        catch(Exception ex) {
            ex.printStackTrace();
        }

        return retVal;
    }

    private CloudBlobClient GetBlobClient() throws URISyntaxException, InvalidKeyException {
        CloudStorageAccount storageAccount = CloudStorageAccount.parse(storageConnectionstring);
        return storageAccount.createCloudBlobClient();
    }
}