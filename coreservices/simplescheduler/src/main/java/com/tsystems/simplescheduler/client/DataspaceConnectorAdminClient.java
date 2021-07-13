package com.tsystems.simplescheduler.client;

import com.tsystems.simplescheduler.configuration.DataspaceConnectorConfiguration;
import de.fraunhofer.iais.eis.Connector;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "ConnectorResourceClient", url = "${scheduler.connector.base-url}/admin/api",
        configuration = DataspaceConnectorConfiguration.class
)
public interface DataspaceConnectorAdminClient {
    @GetMapping(path = "/connector")
    Connector getConnectorDescription();
}
