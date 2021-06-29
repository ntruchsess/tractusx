package com.tsystems.simplescheduler.client;

import com.tsystems.simplescheduler.configuration.DataspaceConnectorConfiguration;
import de.fraunhofer.iais.eis.Connector;
import de.fraunhofer.iais.eis.Contract;
import de.fraunhofer.iais.eis.Representation;
import de.fraunhofer.iais.eis.Resource;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.UUID;

@FeignClient(name = "ConnectorResourceClient", url = "${scheduler.connector.base-url}", path = "/admin/api",
        configuration = DataspaceConnectorConfiguration.class
)
public interface DataspaceConnectorResourcesClient {
    @GetMapping(path = "/connector")
    Connector getConnectorDescription();

    @GetMapping(path = "/resources/{resourceId}")
    Resource getResource(@PathVariable("resourceId") UUID resourceId);

    @GetMapping(path = "/resources/{resourceId}/{representationId}", produces = MediaType.APPLICATION_JSON_VALUE)
    Representation getRepresentation(@PathVariable("resourceId") UUID resourceId, @PathVariable("representationId") UUID representationId);

    @GetMapping(path = "/resources/{resourceId}/contract")
    Contract getPolicy(@PathVariable("resourceId") UUID resourceId);
}
