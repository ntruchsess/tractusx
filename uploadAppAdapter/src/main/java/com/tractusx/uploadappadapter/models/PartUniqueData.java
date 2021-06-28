package com.tractusx.uploadappadapter.models;

public class PartUniqueData {
    //type: string
    //description: this is a local unique ID to identiy the part
    //example:  1AB
    public String uniqueID;

    //type: string
    //description: SerialNo. Of manufacture
    //example: Xxx
    public String manufacturerUniqueID;

    //type: string
    //description: SerialNo. Of customer
    //example: "333"
    public String customerUniqueID;
}
