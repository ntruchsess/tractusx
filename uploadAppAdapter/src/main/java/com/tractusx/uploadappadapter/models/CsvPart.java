package com.tractusx.uploadappadapter.models;

import java.security.PublicKey;

public class CsvPart {

    private String customerUniqueId;
    public String getCustomerUniqueId() {return this.customerUniqueId;}

    private String customerContractOneId;
    public String getCustomerContractOneId() {return this.customerUniqueId;}

    private String customerOneId;
    public String getCustomerOneId() {return this.customerOneId;}

    private String isParentOf;
    public String getIsParentOf() {return this.isParentOf;}

    private String manufacturerOneId;
    public  String getManufacturerOneId(){return this.manufacturerOneId;}

    private String manufacturerUniqueId;
    public String getManufacturerUniqueId(){return this.manufacturerUniqueId;}

    private String partNameCustomer;
    public String getPartNameCustomer(){return this.partNameCustomer;}

    private String partNameManufacturer;
    public String getPartNameManufacturer() {return this.partNameManufacturer;}

    private String partNumberCustomer;
    public String getPartNumberCustomer() {return this.partNumberCustomer;}

    private String partNumberManufacturer;
    public String getPartNumberManufacturer() {return this.partNumberManufacturer;}

    private String productionCountryCode;
    public String getProductionCountryCode() {return this.productionCountryCode;}

    private String productionDateGmt;
    public String getProductionDateGmt(){return this.productionDateGmt;}

    private String qualityAlert;
    public String getQualityAlert(){return this.qualityAlert;}

    private String qualityType;
    public String getQualityType(){return this.qualityType;}

    private String manufacturerContractOneId;
    public String getManufacturerContractOneId(){return this.manufacturerContractOneId;}

    private String uniqueId;
    public String getUniqueId(){return this.uniqueId;}

    public CsvPart(String csvString)
    {
        String[] initArray = csvString.split(",");
        if(initArray.length == 16) {
            this.customerUniqueId = initArray[0];
            this.customerContractOneId = initArray[1];
            this.customerOneId = initArray[2];
            this.isParentOf = initArray[3];
            this.manufacturerOneId = initArray[4];
            this.manufacturerUniqueId = initArray[5];
            this.partNameCustomer = initArray[6];
            this.partNameManufacturer = initArray[7];
            this.partNumberCustomer = initArray[8];
            this.partNumberManufacturer = initArray[9];
            this.productionCountryCode = initArray[10];
            this.productionDateGmt = initArray[11];
            this.qualityAlert = initArray[12];
            this.qualityType = initArray[13];
            this.manufacturerContractOneId = initArray[14];
            this.uniqueId = initArray[15];
        }
    }
}