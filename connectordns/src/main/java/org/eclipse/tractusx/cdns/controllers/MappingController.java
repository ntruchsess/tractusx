package org.eclipse.tractusx.cdns.controllers;

import org.eclipse.tractusx.cdns.controllers.tablestorage.TableStorageConfig;
import org.eclipse.tractusx.cdns.controllers.tablestorage.TableStroageAccess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api")
public class MappingController {

    @Autowired
    TableStorageConfig config;


    @GetMapping("/dns")
    public Object GetMapping(@RequestParam String oneId) throws Exception {
        var tableStorageAccess = new TableStroageAccess(config.storageConnectionstring);
        var dns = tableStorageAccess.GetConnectorDNSMapping(config.mappingTableName, oneId, config.partitionKey);

        return dns;
    }
}

