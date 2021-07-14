package com.tractusx.uploadappadapter.models;

public class PartPartTree {
    //type: array
    //items:
    //type: string
    //example: G05
    //description: UID, UID
    public String[] isParentOf;


    public void setIsParentOf(String[] isParentOf) {
        this.isParentOf = isParentOf;
    }

    public String[] getIsParentOf() {
        return isParentOf;
    }
}
