package com.tractusx.businesspartners.controllers;


import com.tractusx.businesspartners.config.SecurityConfiguration;
import com.tractusx.businesspartners.controllers.tablestorage.BusinessPartner;
import com.tractusx.businesspartners.controllers.tablestorage.TableStorageConfig;
import com.tractusx.businesspartners.controllers.tablestorage.TableStroageAccess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleDataController {

    @Autowired
    TableStorageConfig config;

    @Autowired
    SecurityConfiguration secConfig;

    @GetMapping("/")
    public String GetSampleData(){
        return "Sample  JDK11!";
    }

    @GetMapping("/businesspartner")
    @ResponseBody
    public String GetBusinessPartner(@RequestParam String businessPartnerOneId) throws Exception {
        var tableStorageAccess = new TableStroageAccess(config.storageConnectionstring);
        var partner = tableStorageAccess.GetBusinessPartner(config.tableName, businessPartnerOneId);

        return partner.JsonObject;
    }
}
