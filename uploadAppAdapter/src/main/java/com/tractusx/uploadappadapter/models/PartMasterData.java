package com.tractusx.uploadappadapter.models;

public class PartMasterData {
    public PartStaticData StaticData = new PartStaticData();
    public PartUniqueData UniqueData = new PartUniqueData();
    public PartIndividualData IndividualData = new PartIndividualData();
    public PartSupplyTree SupplyTree = new PartSupplyTree();
    public PartPartTree PartTree = new PartPartTree();
    public PartQualityAlert QualityAlert = new PartQualityAlert();

    public PartIndividualData getIndividualData() {
        return IndividualData;
    }

    public PartPartTree getPartTree() {
        return PartTree;
    }

    public PartQualityAlert getQualityAlert() {
        return QualityAlert;
    }

    public PartStaticData getStaticData() {
        return StaticData;
    }

    public PartSupplyTree getSupplyTree() {
        return SupplyTree;
    }

    public PartUniqueData getUniqueData() {
        return UniqueData;
    }

    // Setter Methods

    public void setIndividualData(PartIndividualData individualDataObject) {
        this.IndividualData = individualDataObject;
    }

    public void setPartTree(PartPartTree partTreeObject) {
        this.PartTree = partTreeObject;
    }

    public void setQualityAlert(PartQualityAlert qualityAlertObject) {
        this.QualityAlert = qualityAlertObject;
    }

    public void setStaticData(PartStaticData staticDataObject) {
        this.StaticData = staticDataObject;
    }

    public void setSupplyTree(PartSupplyTree supplyTreeObject) {
        this.SupplyTree = supplyTreeObject;
    }

    public void setUniqueData(PartUniqueData uniqueDataObject) {
        this.UniqueData = uniqueDataObject;
    }

    public PartMasterData() {}
    public PartMasterData(CsvPart init) {
        //Static data
        this.StaticData.customerOneId = init.customerOneId;
        this.StaticData.customerContractOneId = init.customerContractOneId;
        this.StaticData.manufacturerOneId = init.manufacturerOneId;
        this.StaticData.manufacturerContractOneId = init.manufactureContractOneId;
        this.StaticData.partNameCustomer = init.partNameCustomer;
        this.StaticData.partNameManufacturer = init.partNameManufacturer;
        this.StaticData.partNumberCustomer = init.partNameCustomer;
        this.StaticData.partNumberManufacturer = init.partNumberManufacturer;

        //PartUnique
        this.UniqueData.customerUniqueId = init.customerUniqueId;
        this.UniqueData.uniqueId = init.uniqueId;
        this.UniqueData.manufacturerUniqueId = init.manufacturerUniqueId;

        //PartsInidivual
        this.IndividualData.productionCountryCode = init.productionCountryCode;
        this.IndividualData.productionDateGmt = init.productionDateGmt;

        //PartsSupplyTree
        //this.supplyTree.isParentOf =;

        //PartTreeParent
        this.PartTree.isParentOf =init.isParentOf;

        //Quality Alert
        this.QualityAlert.qualityAlert = Boolean.parseBoolean(init.qualityAlert);
        try {
            this.QualityAlert.qualityType = AlertLevel.valueOf(init.qualityType);
        }
        catch(IllegalArgumentException ex)
        {
            //Exception
        }
    }
}
