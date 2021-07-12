package com.tractusx.partsmasterdata.controllers;

import com.tractusx.partsmasterdata.dal.DataRequest;
import com.tractusx.partsmasterdata.dal.DataRequestConfiguration;
import com.tractusx.partsmasterdata.dal.DbAccess;
import com.tractusx.partsmasterdata.dal.DbConfiguration;
import com.tractusx.partsmasterdata.dal.ReqConfig;
import com.tractusx.partsmasterdata.models.PartMasterData;
import nonapi.io.github.classgraph.json.JSONDeserializer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Calendar;
import java.util.Date;

@RestController
public class partmasterdatacontroller {
    @Autowired
    DbConfiguration dbConfig;

    @Autowired
    DataRequestConfiguration reqConfig;

     /*@GetMapping("/api/getPartMasterData")
    public String GetParts(
            @RequestParam("manufacturerOneId")String manufacturerOneId,
            @RequestParam("customerOneId") String customerOneId,
            @RequestParam("partNumberManufacturer") String partNumberManufacturer,
            @RequestParam("partNumberCustomer") String partNumberCustomer)
    {
        return "";
    }*/

    @PostMapping("/api/Insert")
    public String doPartsInsert(){
        processParts();
        return "done";
    }

    //@Scheduled(fixedRate = 1000)
    @Scheduled(cron = "${requestconfig.cronstring}")
    private void getParts()
    {
        System.out.println("getParts started");
        processParts();
        System.out.println("getParts finished");
    }


    private void processParts()
    {
        ReqConfig[] configs = reqConfig.getReqConfigs();

        for(ReqConfig rConfig:configs) {
            DataRequest dr = new DataRequest();
            PartMasterData[] partsFromExternalSource = dr.GetParts(rConfig);

            if(partsFromExternalSource != null) {
                DbAccess da = new DbAccess(dbConfig);
                da.SavePartsToDataBase(partsFromExternalSource);
            }
        }
    }
}
