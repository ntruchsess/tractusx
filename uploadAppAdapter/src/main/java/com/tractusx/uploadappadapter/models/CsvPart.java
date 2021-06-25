package com.tractusx.uploadappadapter.models;

public class CsvPart {
    public String customerUniqueId;
    public String customerContractOneId;
    public String customerOneId;
    public String[] isParentOf;
    public String manufacturerOneId;
    public String manufacturerUniqueId;
    public String partNameCustomer;
    public String partNameManufacturer;
    public String partNumberCustomer;
    public String partNumberManufacturer;
    public String productionCountryCode;
    public String productionDateGmt;
    public String qualityAlert;
    public String qualityType;
    public String manufacturerContractOneId;
    public String uniqueId;

    public CsvPart(String csvString)
    {
        String parentsSubstring = csvString.substring(csvString.indexOf("[")+1,csvString.indexOf("]"));
        String[]parents = parentsSubstring.replace("'","").split(",");

        csvString.replaceFirst("[" + parentsSubstring + "]","");


        String[] initArray = csvString.split(",");
        if(initArray.length == 16) {
            this.customerUniqueId = initArray[0];
            this.customerContractOneId = initArray[1];
            this.customerOneId = initArray[2];
            this.isParentOf = parents;
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