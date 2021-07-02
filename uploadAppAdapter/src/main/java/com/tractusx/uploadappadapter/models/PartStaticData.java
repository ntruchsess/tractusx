package com.tractusx.uploadappadapter.models;

    public class PartStaticData {
        //description: OneID of manufacture partner
        //allOf:
        //- $ref: "#/components/schemas/OneIDBusinessPartner"
        public String manufacturerOneId;

        //description: OneID of manufacture contract partner
        //allOf:
        //- $ref: "#/components/schemas/OneIDBusinessPartner"
        public String manufacturerContractOneId;

        //type: string
        //description: Name of the part family of manufacture
        //example: KLEBER1
        public String partNameManufacturer;

        //type: string
        //description: Number of part family of manufacture
        //example: 101.15V
        public String partNumberManufacturer;

        // description: OneID of customer contract partner
        // allOf:
        //- $ref: "#/components/schemas/OneIDBusinessPartner"
        public String customerOneId;

        //description: OneID of manufacture contract partner
        //allOf:
        //- $ref: "#/components/schemas/OneIDBusinessPartner"
        public String customerContractOneId;

        //type: string
        //description: Name of the customer product
        //example: MIRROR_1
        public String partNameCustomer;

        //type: string
        //description: Name of the customer product
        //example: MIRROR_1
        public String partNumberCustomer;

        // Getter Methods

        public String getCustomerContractOneId() {
            return customerContractOneId;
        }

        public String getCustomerOneId() {
            return customerOneId;
        }

        public String getManufacturerContractOneId() {
            return manufacturerContractOneId;
        }

        public String getManufacturerOneId() {
            return manufacturerOneId;
        }

        public String getPartNameCustomer() {
            return partNameCustomer;
        }

        public String getPartNameManufacturer() {
            return partNameManufacturer;
        }

        public String getPartNumberCustomer() {
            return partNumberCustomer;
        }

        public String getPartNumberManufacturer() {
            return partNumberManufacturer;
        }

        // Setter Methods

        public void setCustomerContractOneId(String customerContractOneId) {
            this.customerContractOneId = customerContractOneId;
        }

        public void setCustomerOneId(String customerOneId) {
            this.customerOneId = customerOneId;
        }

        public void setManufacturerContractOneId(String manufacturerContractOneId) {
            this.manufacturerContractOneId = manufacturerContractOneId;
        }

        public void setManufacturerOneId(String manufacturerOneId) {
            this.manufacturerOneId = manufacturerOneId;
        }

        public void setPartNameCustomer(String partNameCustomer) {
            this.partNameCustomer = partNameCustomer;
        }

        public void setPartNameManufacturer(String partNameManufacturer) {
            this.partNameManufacturer = partNameManufacturer;
        }

        public void setPartNumberCustomer(String partNumberCustomer) {
            this.partNumberCustomer = partNumberCustomer;
        }

        public void setPartNumberManufacturer(String partNumberManufacturer) {
            this.partNumberManufacturer = partNumberManufacturer;
        }
    }
