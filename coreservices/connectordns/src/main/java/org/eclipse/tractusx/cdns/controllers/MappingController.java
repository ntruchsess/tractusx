package org.eclipse.tractusx.cdns.controllers;

import org.eclipse.tractusx.cdns.controllers.tablestorage.ConnectorDNSRecord;
import org.eclipse.tractusx.cdns.controllers.tablestorage.TableStorageConfig;
import org.eclipse.tractusx.cdns.controllers.tablestorage.TableStroageAccess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController()
public class MappingController {

    @Autowired
    TableStorageConfig config;


    @GetMapping("/dns")
    public ArrayList<ConnectorDNSRecord> getConnectorDNSEntry(@RequestParam(required = false) String businessPartnerOneID, @RequestParam(required = false) String connectorId)
            throws Exception {
        var tableStorageAccess = new TableStroageAccess(config.storageConnectionstring);
       return tableStorageAccess.GetConnectorDNSEntry(config.mappingTableName,  businessPartnerOneID, connectorId);
    }
}

