package com.tractusx.partsmasterdata.models;

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
    public String productionDateGmt;

    public String getProductionCountryCode() {
        return productionCountryCode;
    }

    public String getProductionDateGmt() {
        return productionDateGmt;
    }

    // Setter Methods
    public void setProductionCountryCode(String productionCountryCode) {
        this.productionCountryCode = productionCountryCode;
    }

    public void setProductionDateGmt(String productionDateGmt) {
        this.productionDateGmt = productionDateGmt;
    }
}