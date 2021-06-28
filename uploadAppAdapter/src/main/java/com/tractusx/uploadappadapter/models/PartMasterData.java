package com.tractusx.uploadappadapter.models;

public class PartMasterData {
    public PartStaticData staticData = new PartStaticData();
    public PartUniqueData uniqueData = new PartUniqueData();
    public PartIndividualData individualData = new PartIndividualData();
    public PartSupplyTree supplyTree = new PartSupplyTree();
    public PartPartTreeParent partTreeParent = new PartPartTreeParent();
    public PartQualityAlert qualityAlert = new PartQualityAlert();

    public PartMasterData() {}
    public PartMasterData(CsvPart init) {
        //Static data
        this.staticData.customerOneID = init.customerOneId;
        this.staticData.customerContractOneID = init.customerContractOneId;
        this.staticData.manufacturerOneId = init.manufacturerOneId;
        this.staticData.manufactureContractOneId = init.manufactureContractOneId;
        this.staticData.partNameCustomer = init.partNameCustomer;
        this.staticData.partNameManufacturer = init.partNameManufacturer;
        this.staticData.partNumberCustomer = init.partNameCustomer;
        this.staticData.partNumberManufacturer = init.partNumberManufacturer;

        //PartUnique
        this.uniqueData.customerUniqueID = init.customerUniqueId;
        this.uniqueData.uniqueID = init.uniqueId;
        this.uniqueData.manufacturerUniqueID = init.manufacturerUniqueId;

        //PartsInidivual
        this.individualData.productionCountryCode = init.productionCountryCode;
        this.individualData.productionDateGMT = init.productionDateGmt;

        //PartsSupplyTree
        //this.supplyTree.isParentOf =;

        //PartTreeParent
        this.partTreeParent.isParentOf =init.isParentOf;

        //Quality Alert
        this.qualityAlert.QualityAlert = Boolean.parseBoolean(init.qualityAlert);
        try {
            this.qualityAlert.QualityType = AlertLevel.valueOf(init.qualityType);
        }
        catch(IllegalArgumentException ex)
        {
            //Exception
        }
    }
}
