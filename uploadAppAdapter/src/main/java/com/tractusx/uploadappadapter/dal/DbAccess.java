package com.tractusx.uploadappadapter.dal;


import com.tractusx.uploadappadapter.UploadAppAdapterApplication;
import com.tractusx.uploadappadapter.models.AlertLevel;
import com.tractusx.uploadappadapter.models.PartMasterData;
import com.tractusx.uploadappadapter.models.PartQualityAlert;

import java.sql.*;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class DbAccess {

    private Connection connection;
    private DbConfiguration config;

    public DbAccess(DbConfiguration config) {
        this.config = config;
    }

    public void SavePartsToDataBase(PartMasterData[] parts) {
        GetConnection();

        if (connection == null) {
            //throw new Exception("No connection to db established!");
        }

        EnsureTablesInDatabase();
        InsertPartsInDatabase(parts);
    }

    public PartMasterData[] GetPartsFromDatabase(String companyOneId) {
        GetConnection();
        if (connection == null) {
            //throw new Exception("No connection to db established!");
        }
        return ReturnPartsFromDatabase(companyOneId);
    }

    private void InsertPartsInDatabase(PartMasterData[] parts) {
        Instant dateTimeNowUtc = Instant.now();
        int i = 0;

        try {
            PreparedStatement insertStatement = connection
                    .prepareStatement("INSERT INTO parts (" +
                            "customerUniqueId," +
                            "customerContractOneId," +
                            "customerOneId," +
                            "isParentOf," +
                            "manufacturerOneId," +
                            "manufacturerUniqueId," +
                            "partNameCustomer," +
                            "partNameManufacturer," +
                            "partNumberCustomer," +
                            "partNumberManufacturer," +
                            "productionCountryCode," +
                            "productionDateGmt," +
                            "qualityAlert," +
                            "qualityType," +
                            "manufactureContractOneId," +
                            "uniqueId," +
                            "importTimestampUtc) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);");

            for (var part : parts) {
                insertStatement.setString(1, part.uniqueData.customerUniqueID); //customerUniqueId
                insertStatement.setString(2, part.staticData.customerContractOneID); //customerContractOneId
                insertStatement.setString(3, part.staticData.customerOneID); //customerOneId
                insertStatement.setString(4, Arrays.toString(part.partTreeParent.isParentOf));//isParentOf
                insertStatement.setString(5, part.staticData.manufacturerOneId); //manufacturerOneId
                insertStatement.setString(6, part.uniqueData.manufacturerUniqueID); //manufacturerUniqueId
                insertStatement.setString(7, part.staticData.partNumberCustomer); //partNameCustomer
                insertStatement.setString(8, part.staticData.partNameManufacturer); //partNameManufacturer
                insertStatement.setString(9, part.staticData.partNumberCustomer); //partNumberCustomer
                insertStatement.setString(10, part.staticData.partNumberManufacturer); //partNumberManufacturer
                insertStatement.setString(11, part.individualData.productionCountryCode); //productionCountryCode
                insertStatement.setString(12, part.individualData.productionDateGMT); //productionDateGmt
                insertStatement.setBoolean(13, part.qualityAlert.QualityAlert); //qualityAlert
                var qualType = String.valueOf(part.qualityAlert.QualityType);
                if(qualType == "null")
                    qualType = "";
                insertStatement.setString(14, qualType);//part.qualityAlert.QualityType); //qualityType
                insertStatement.setString(15, part.staticData.manufactureContractOneId); //manufactureContractOneId
                insertStatement.setString(16, part.uniqueData.uniqueID); //uniqueId
                insertStatement.setTimestamp(17, Timestamp.from(dateTimeNowUtc));


                insertStatement.addBatch();
                i++;
                if (i % 1000 == 0 || i == parts.length) {
                    insertStatement.executeBatch();
                }
            }
        } catch (Exception ex) {

        }

    }



    private PartMasterData[] ReturnPartsFromDatabase(String companyOneId)
    {
        List<PartMasterData> parts = new ArrayList<PartMasterData>();
        try {
            PreparedStatement readStatement = connection.prepareStatement("SELECT * FROM parts WHERE customeroneid='"+ companyOneId +"';");
            ResultSet resultSet = readStatement.executeQuery();

            while (resultSet.next())
            {
                PartMasterData p = new PartMasterData();
                p.uniqueData.customerUniqueID = resultSet.getString("customerUniqueId"); //customerUniqueId
                p.staticData.customerContractOneID = resultSet.getString("customerContractOneId"); //customerContractOneId
                p.staticData.customerOneID = resultSet.getString("customerOneId"); //customerOneId
                p.partTreeParent.isParentOf = resultSet.getString("isParentOf").split(",");//
                p.staticData.manufacturerOneId = resultSet.getString("manufacturerOneId"); //manufacturerOneId
                p.uniqueData.manufacturerUniqueID = resultSet.getString("manufacturerUniqueId"); //manufacturerUniqueId
                p.staticData.partNumberCustomer = resultSet.getString("partNameCustomer"); //partNameCustomer
                p.staticData.partNameManufacturer = resultSet.getString("partNameManufacturer"); //partNameManufacturer
                p.staticData.partNumberCustomer = resultSet.getString("partNumberCustomer"); //partNumberCustomer
                p.staticData.partNumberManufacturer = resultSet.getString("partNumberManufacturer"); //partNumberManufacturer
                p.individualData.productionCountryCode = resultSet.getString("productionCountryCode"); //productionCountryCode
                p.individualData.productionDateGMT = resultSet.getString("productionDateGmt"); //productionDateGmt
                p.qualityAlert.QualityAlert = resultSet.getBoolean("qualityAlert"); //qualityAlert
                var qualType = resultSet.getString("qualityType");
                if(!qualType.equals("")) {
                    p.qualityAlert.QualityType = AlertLevel.valueOf(resultSet.getString("qualityType"));
                }

                p.staticData.manufactureContractOneId= resultSet.getString("manufactureContractOneId"); //manufactureContractOneId
                p.uniqueData.uniqueID = resultSet.getString("uniqueId"); //uniqueId
                parts.add(p);
            }


        }
        catch(Exception ex)
        {}

        if(parts == null || parts.isEmpty())
            return null;
        return parts.toArray(new PartMasterData[parts.size()]);
    }

    private void GetConnection()
    {
        Connection c = null;
        try {
            Class.forName("org.postgresql.Driver");

            c = DriverManager
                    .getConnection(config.postGreUploadUrl + "/" + config.postGreUploadDb + "?&ssl=true&sslmode=require",
                            config.postGreUploadUser,
                            config.postGreUploadPassword);
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName()+": "+e.getMessage());
        }
        this.connection = c;
    }

    private void EnsureTablesInDatabase()
    {
        try
        {
            Statement st = connection.createStatement();
            Scanner scanner = new Scanner(UploadAppAdapterApplication.class.getClassLoader().getResourceAsStream("schema.sql"));
            Statement statement = connection.createStatement();
            while (scanner.useDelimiter(";").hasNext())
            {
                statement.execute(scanner.next());
            }
        }
        catch(Exception ex)
        {}
    }

}
