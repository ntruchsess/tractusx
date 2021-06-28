package com.tractusx.uploadappadapter.models;

public class PartIndividualData {
     //type: string
    //description: Country of production
    //minLength: 3
    //maxLength: 3
    //example: "HUR"
    public String productionCountryCode;

    //type: string
    //description: Production Date without timestamp
    //format: date
    public String productionDateGMT;

}
