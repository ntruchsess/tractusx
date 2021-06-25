package com.tsystems.simplescheduler.client.model;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public enum DataSourceTypeEnum {
    LOCAL("local"),
    HTTP_GET("http-get"),
    HTTPS_GET("https-get"),
    HTTPS_GET_BASICAUTH("https-get-basicauth");

    @JsonValue
    private final String stringRepresentation;
}
