package com.tractusx.partsmasterdata.dal;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Configuration
@ConfigurationProperties(prefix = "requestconfig")
public class DataRequestConfiguration {
    public void setRequestConfig(String requestConfig){ this.requestConfig = requestConfig;}
    public String requestConfig;

    public void setCronString(String cronString){ this.cronString = cronString;}
    public String cronString;


    public ReqConfig[] getReqConfigs()
    {
        ReqConfig[] retVal = null;
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.disable(DeserializationFeature.FAIL_ON_NULL_FOR_PRIMITIVES,
                    DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);

            retVal = objectMapper.readValue(requestConfig, ReqConfig[].class);
        }
        catch(JsonProcessingException ex)
        {}
        return retVal;
    }
}
