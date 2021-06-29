package com.tractusx.partsmasterdata.models;

import com.fasterxml.jackson.annotation.JsonProperty;

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
}
