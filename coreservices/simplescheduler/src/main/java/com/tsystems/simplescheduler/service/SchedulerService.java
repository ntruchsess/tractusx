package com.tsystems.simplescheduler.service;

import com.tsystems.simplescheduler.client.DataspaceConnectorAdminClient;
import com.tsystems.simplescheduler.client.DataspaceConnectorRequestClient;
import com.tsystems.simplescheduler.property.ResourcesProperties;
import de.fraunhofer.iais.eis.RepresentationInstance;
import de.fraunhofer.iais.eis.ResourceCatalog;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.ListUtils;
import org.apache.commons.collections4.MapUtils;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.net.URI;

@Slf4j
@Service
@RequiredArgsConstructor
public class SchedulerService {
    private static final String CONNECTOR_URL_TEMPLATE = "%s/api/ids/data";
    private static final String RESOURCE_URI_TEMPLATE = "https://w3id.org/idsa/autogen/resource/%s";
    private static final String ALLOW_POLICY = "{\n  \"@context\" : {\n    \"ids\" : \"https://w3id.org/idsa/core/\"\n  },\n  \"@type\" : \"ids:ContractOffer\",\n  \"@id\" : \"https://w3id.org/idsa/autogen/contractOffer/3ca8ce5e-1487-4aaf-ac19-593298c27d18\",\n  \"ids:permission\" : [ {\n    \"@type\" : \"ids:Permission\",\n    \"@id\" : \"https://w3id.org/idsa/autogen/permission/2a87f23b-a6b4-4c2d-bfbb-d035cf2ccdbd\",\n    \"ids:title\" : [ {\n      \"@value\" : \"Example Usage Policy\",\n      \"@type\" : \"http://www.w3.org/2001/XMLSchema#string\"\n    } ],\n    \"ids:action\" : [ {\n      \"@id\" : \"idsc:USE\"\n    } ],\n    \"ids:description\" : [ {\n      \"@value\" : \"provide-access\",\n      \"@type\" : \"http://www.w3.org/2001/XMLSchema#string\"\n    } ]\n  } ]\n}";

    private final DataspaceConnectorRequestClient requestClient;
    private final DataspaceConnectorAdminClient adminClient;
    private final ResourcesProperties resourcesProperties;

    @Scheduled(cron = "${scheduler.cron}")
    public void scheduledTask() {
        var resources = ListUtils.emptyIfNull(adminClient.getConnectorDescription().getResourceCatalog())
                .stream()
                .findFirst()
                .map(ResourceCatalog::getRequestedResource)
                .orElse(null);
        if (CollectionUtils.isEmpty(resources)) {
            log.error("Consumer connector has no registered resources");
            return;
        }
        MapUtils.emptyIfNull(resourcesProperties.getResources()).forEach((resourceId, recipientConnectorBaseUrl) -> {
            var resourceURI = String.format(RESOURCE_URI_TEMPLATE, resourceId);

            var artifactId = resources.stream()
                    .filter(resource -> resourceURI.equals(resource.getId().toString()))
                    .flatMap(resource -> ListUtils.emptyIfNull(resource.getRepresentation()).stream())
                    .findFirst()
                    .flatMap(representation -> ListUtils.emptyIfNull(representation.getInstance()).stream().findFirst())
                    .map(RepresentationInstance::getId)
                    .map(URI::toString)
                    .orElse(null);

            if (artifactId == null) {
                log.error("ArtifactId for resource {} is null", resourceId);
                return;
            }

            var recipientConnectorUrl = String.format(CONNECTOR_URL_TEMPLATE, recipientConnectorBaseUrl);
            var contractAgreement = requestClient.requestContract(recipientConnectorUrl, artifactId, ALLOW_POLICY);
            var artifactResponse = requestClient.requestArtifact(recipientConnectorUrl, artifactId,
                    resourceId, contractAgreement);
            if (artifactResponse == null) {
                log.error("Artifact response for resource {} is null", resourceId);
            }
            log.debug("Artifact response: {}", artifactResponse);
        });
    }
}
