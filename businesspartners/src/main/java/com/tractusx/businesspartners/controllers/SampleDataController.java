package com.tractusx.businesspartners.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleDataController {

    @GetMapping("/")
    public String GetSampleData(){
        return "Sample  JDK11!";
    }
}
