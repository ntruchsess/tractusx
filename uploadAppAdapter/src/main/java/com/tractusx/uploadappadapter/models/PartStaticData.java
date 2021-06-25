package com.tractusx.uploadappadapter.models;

public class PartStaticData {
    //description: OneID of manufacture partner
    //allOf:
    //- $ref: "#/components/schemas/OneIDBusinessPartner"
    public String manufacturerOneId;

    //description: OneID of manufacture contract partner
    //allOf:
    //- $ref: "#/components/schemas/OneIDBusinessPartner"
    public String manufactureContractOneId;

    //type: string
    //description: Name of the part family of manufacture
    //example: KLEBER1
    public String partNameManufacturer;

    //type: string
    //description: Number of part family of manufacture
    //example: 101.15V
    public String partNumberManufacturer;

    // description: OneID of customer contract partner
    // allOf:
    //- $ref: "#/components/schemas/OneIDBusinessPartner"
    public String customerOneID;

    //description: OneID of manufacture contract partner
    //allOf:
    //- $ref: "#/components/schemas/OneIDBusinessPartner"
    public String customerContractOneID;

    //type: string
    //description: Name of the customer product
    //example: MIRROR_1
    public String partNameCustomer;

    //type: string
    //description: Name of the customer product
    //example: MIRROR_1
    public String partNumberCustomer;
}
