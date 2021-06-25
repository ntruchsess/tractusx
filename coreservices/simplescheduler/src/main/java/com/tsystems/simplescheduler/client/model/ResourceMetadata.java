package com.tsystems.simplescheduler.client.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.net.URI;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ResourceMetadata {
    private String title;
    private String description;
    private List<String> keywords;
    private URI owner;
    private URI license;
    private String version;
    private String policy;
    private List<ResourceRepresentation> representations;
}
