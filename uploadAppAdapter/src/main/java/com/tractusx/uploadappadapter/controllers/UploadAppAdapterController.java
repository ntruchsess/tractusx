package com.tractusx.uploadappadapter.controllers;

import com.tractusx.uploadappadapter.dal.BlobStorageAccess;
import com.tractusx.uploadappadapter.dal.BlobStorageConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;



@RestController
public class UploadAppAdapterController {
    @Autowired
    BlobStorageConfiguration config;

    @GetMapping("/api")
    public String GetSampleData(){
        return "Container name:" + config.blobContainerName +"\r\nStorageAccountConnectionString:" + config.storageConnectionstring;
    }

    @PostMapping("/api/upload")
    public String handleFileUpload(@RequestParam("file")MultipartFile file, @RequestParam String company){
        var blobStorageAccess = new BlobStorageAccess(config.storageConnectionstring);
        return blobStorageAccess.UploadFile(file, company);
    }
}
