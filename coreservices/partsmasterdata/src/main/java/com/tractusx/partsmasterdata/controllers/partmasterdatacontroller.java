package com.tractusx.partsmasterdata.controllers;

import com.tractusx.partsmasterdata.dal.DbAccess;
import com.tractusx.partsmasterdata.dal.DbConfiguration;
import com.tractusx.partsmasterdata.models.PartMasterData;
import nonapi.io.github.classgraph.json.JSONDeserializer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class partmasterdatacontroller {
    @Autowired
    DbConfiguration dbConfig;

     /*@GetMapping("/api/getPartMasterData")
    public String GetParts(
            @RequestParam("manufacturerOneId")String manufacturerOneId,
            @RequestParam("customerOneId") String customerOneId,
            @RequestParam("partNumberManufacturer") String partNumberManufacturer,
            @RequestParam("partNumberCustomer") String partNumberCustomer)
    {
        return "";
    }*/

    @PostMapping("/api/Insert")
    public String doPartsInsert(){
        DbAccess da = new DbAccess(dbConfig);
        da.SavePartsToDataBase(getTestParts());
        return "done";
    }





    private PartMasterData[] getTestParts()
    {
        PartMasterData[] retVal = new PartMasterData[4];

        retVal[0] = new PartMasterData();
        retVal[0].UniqueData.uniqueId = "1";
        retVal[0].PartTree.isParentOf = new String[] {"2","3","4","5"};

        retVal[1] = new PartMasterData();
        retVal[1].UniqueData.uniqueId = "2";

        retVal[2] = new PartMasterData();
        retVal[2].UniqueData.uniqueId = "3";
        retVal[2].PartTree.isParentOf = new String[] {"1"};

        retVal[3] = new PartMasterData();
        retVal[3].UniqueData.uniqueId = "4";
        retVal[3].PartTree.isParentOf = new String[] {"3","4"};

        return retVal;
    }
}
