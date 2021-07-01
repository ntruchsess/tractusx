package com.tractusx.uploadappadapter.controllers;

import com.tractusx.uploadappadapter.dal.*;
import com.tractusx.uploadappadapter.models.PartMasterData;
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

    @GetMapping("/api/getPartMasterData")
    public PartMasterData[] getParts(@RequestParam("companyOneId") String companyOneId)
    {
        var dbAccess = new DbAccess(dbConfig);
        return dbAccess.GetPartsFromDatabase(companyOneId);
    }


    @PostMapping("/api/upload")
    public String handleFileUpload(@RequestParam("file")MultipartFile file, @RequestParam String company){
        String retVal;
        var blobStorageAccess = new BlobStorageAccess(blobConfig.storageConnectionstring);
        retVal = blobStorageAccess.UploadFile(file, company);
////Blob upload done

        ComputeFile computeFile = new ComputeFile();
        var parts = computeFile.Extract(file);

        PartMasterData[] pmasters = new PartMasterData[parts.length];
        for(int x = 0; x<parts.length; x++)
        {
            pmasters[x] = new PartMasterData(parts[x]);
        }

        var dbAccess = new DbAccess(dbConfig);
        dbAccess.SavePartsToDataBase(pmasters);
///////////Upload and insert to DB done!

        return retVal;
    }
}
