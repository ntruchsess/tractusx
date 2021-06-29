package com.tractusx.partsmasterdata.models;

public class PartQualityAlert {
    public Boolean qualityAlert;
    public AlertLevel qualityType;

    public boolean getQualityAlert() {
        return qualityAlert;
    }

    public AlertLevel getQualityType() {
        return qualityType;
    }

    // Setter Methods

    public void setQualityAlert(boolean qualityAlert) {
        this.qualityAlert = qualityAlert;
    }

    public void setQualityType(AlertLevel qualityType) {
        this.qualityType = qualityType;
    }
}
