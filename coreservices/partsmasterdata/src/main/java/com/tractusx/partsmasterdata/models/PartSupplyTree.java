package com.tractusx.partsmasterdata.models;

public class PartSupplyTree {
    //type: array
    //items:
    //type: string
    //example: 0000003_ZF
    //description: pNM*, pNM
    public String[] isParentOf;


    public void setIsParentOf(String[] isParentOf) {
        this.isParentOf = isParentOf;
    }

    public String[] getQualityAlert() {
        return isParentOf;
    }
}