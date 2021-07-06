package com.tractusx.partsmasterdata.models;

import java.sql.Timestamp;

public class DbPartMasterData extends PartMasterData{
    public int id;
    public Timestamp validUntilUtc;
    public Boolean isTempPart;

    public DbPartMasterData(){};

    public int getId() {
        return id;
    }

    public Timestamp getValidUntilUtc() {
        return validUntilUtc;
    }

    public Boolean getIsTempPart()
    {
        return isTempPart;
    }

    public void setId(int idObject) {
        this.id = idObject;
    }

    public void setValidUntilUtc(Timestamp validUntilUtcObject) {
        this.validUntilUtc = validUntilUtcObject;
    }

    public void setIsTempPart(Boolean isTempPartObject){
        this.isTempPart = isTempPartObject;
    }

}
