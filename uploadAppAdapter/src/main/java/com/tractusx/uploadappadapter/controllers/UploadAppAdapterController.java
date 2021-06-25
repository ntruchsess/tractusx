package com.tractusx.uploadappadapter.controllers;

import com.tractusx.uploadappadapter.dal.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;



@RestController
public class UploadAppAdapterController {
    @Autowired
    BlobStorageConfiguration blobConfig;

    @Autowired
    DbConfiguration dbConfig;

    @GetMapping("/api")
    public String GetSampleData(){
        return "Container name:" + blobConfig.blobContainerName +"\r\nStorageAccountConnectionString:" + blobConfig.storageConnectionstring;
    }

    @GetMapping("/api/getPartMasterData")
    public String GetParts(
            @RequestParam("manufacturerOneId")String manufacturerOneId,
            @RequestParam("customerOneId") String customerOneId,
            @RequestParam("partNumberManufacturer") String partNumberManufacturer,
            @RequestParam("partNumberCustomer") String partNumberCustomer)
    {
        return "";
    }

    @PostMapping("/api/upload")
    public String handleFileUpload(@RequestParam("file")MultipartFile file, @RequestParam String company){
        String retVal;
        var blobStorageAccess = new BlobStorageAccess(blobConfig.storageConnectionstring);
        retVal = blobStorageAccess.UploadFile(file, company);

        var dbAccess = new DbAccess(dbConfig);
        dbAccess.SavePartsToDataBase(null);

        if(!retVal.equals("")) {
            new ComputeFile().Extract(file);
        }
        return retVal;
    }
}
