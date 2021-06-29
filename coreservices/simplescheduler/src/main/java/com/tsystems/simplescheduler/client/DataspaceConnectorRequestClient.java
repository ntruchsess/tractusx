package com.tsystems.simplescheduler.client;

import com.tsystems.simplescheduler.configuration.DataspaceConnectorConfiguration;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "DataspaceConnectorRequestClient", url = "${scheduler.connector.base-url}", path = "/admin/api/request",
        configuration = DataspaceConnectorConfiguration.class
)
public interface DataspaceConnectorRequestClient {
    @PostMapping(path = "/description", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
    String requestMetadata(@RequestParam("recipient") String recipient,
                           @RequestParam(value = "requestedResource", required = false) String requestedResource);

    @PostMapping(path = "/contract", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
    String requestContract(@RequestParam("recipient") String recipient,
                           @RequestParam("requestedArtifact") String requestedArtifact,
                           @RequestBody String contract);

    @PostMapping(path = "/artifact", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
    String requestArtifact(@RequestParam("recipient") String recipient,
                           @RequestParam("requestedArtifact") String requestedArtifact,
                           @RequestParam("key") String key,
                           @RequestParam("transferContract") String transferContract);
}
