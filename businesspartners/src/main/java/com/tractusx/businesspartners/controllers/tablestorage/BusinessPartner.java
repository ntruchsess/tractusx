package com.tractusx.businesspartners.controllers.tablestorage;
import com.microsoft.azure.storage.table.TableServiceEntity;


import java.util.List;

public class BusinessPartner extends TableServiceEntity {

     public String[] isParentOf;
   public  String customerContractOneId;
     public  String customerOneId;
     public   String manufacturerContractOneId;
     public   String manufacturerOneId;
     public   String manufacturerUniqueId;
     public    String partNameCustomer;
     public    String partNameManufacturer;
     public    String partNumberCustomer;
     public    String partNumberManufacturer;
     public   String productionCountryCode;
     public   String productionDateGmt;
     public   String customerUniqueId;
     public     boolean qualityAlert;
     public   String qualityType;
     public String uniqueId;

}
