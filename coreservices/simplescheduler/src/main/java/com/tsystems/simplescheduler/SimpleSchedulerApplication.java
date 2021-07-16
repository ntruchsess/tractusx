package com.tsystems.simplescheduler;

import com.tsystems.simplescheduler.property.ResourcesProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@EnableFeignClients
@EnableConfigurationProperties({ResourcesProperties.class})
public class SimpleSchedulerApplication {
    public static void main(String[] args) {
        SpringApplication.run(SimpleSchedulerApplication.class);
    }
}
