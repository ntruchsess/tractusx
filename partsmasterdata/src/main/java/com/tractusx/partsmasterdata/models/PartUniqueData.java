package com.tractusx.partsmasterdata.models;

public class PartUniqueData {
    //type: string
    //description: this is a local unique ID to identiy the part
    //example:  1AB
    public String uniqueId;

    //type: string
    //description: SerialNo. Of manufacture
    //example: Xxx
    public String manufacturerUniqueId;

    //type: string
    //description: SerialNo. Of customer
    //example: "333"
    public String customerUniqueId;

    // Getter Methods

    public String getCustomerUniqueId() {
        return customerUniqueId;
    }

    public String getManufacturerUniqueId() {
        return manufacturerUniqueId;
    }

    public String getUniqueId() {
        return uniqueId;
    }

    // Setter Methods

    public void setCustomerUniqueId(String customerUniqueId) {
        this.customerUniqueId = customerUniqueId;
    }

    public void setManufacturerUniqueId(String manufacturerUniqueId) {
        this.manufacturerUniqueId = manufacturerUniqueId;
    }

    public void setUniqueId(String uniqueId) {
        this.uniqueId = uniqueId;
    }
}
