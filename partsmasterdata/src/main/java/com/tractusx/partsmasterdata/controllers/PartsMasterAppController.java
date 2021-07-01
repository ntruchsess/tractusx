package com.tractusx.partsmasterdata.controllers;


import com.tractusx.partsmasterdata.dal.DbConfiguration;

        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.web.bind.annotation.GetMapping;
        import org.springframework.web.bind.annotation.PostMapping;
        import org.springframework.web.bind.annotation.RequestParam;
        import org.springframework.web.bind.annotation.RestController;
        import org.springframework.web.multipart.MultipartFile;



@RestController
public class PartsMasterAppController {

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
    public string doPartsInsert(){
        return "test";
    }
}
