package com.tractusx.uploadappadapter.dal;

import com.microsoft.azure.storage.CloudStorageAccount;
import com.microsoft.azure.storage.blob.CloudBlobClient;
import com.microsoft.azure.storage.blob.CloudBlobContainer;
import com.microsoft.azure.storage.blob.CloudBlockBlob;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URISyntaxException;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

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

            //ComputeFile(file);

        }
        catch(Exception e){
            e.printStackTrace();
        }
        return fileUri;
    }

    private void ComputeFile(MultipartFile file) {
        String[] LinesInFile = ReadLines(file);
    }

    private String[] ReadLines(MultipartFile file) {
        try
        {
            InputStream inputStream = file.getInputStream();
            BufferedReader br = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8));
            List<String> csvLines = br.lines().skip(1).map(mapToItem).collect(Collectors.toList());
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
        }

        return null;
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