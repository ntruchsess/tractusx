package com.tractusx.uploadappadapter.dal;


import com.tractusx.uploadappadapter.UploadAppAdapterApplication;
import com.tractusx.uploadappadapter.models.AlertLevel;
import com.tractusx.uploadappadapter.models.PartMasterData;

import java.sql.*;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.logging.Logger;

public class DbAccess {

    private final static Logger LOGGER = Logger.getLogger(DbAccess.class.getName());

    private Connection connection;
    private DbConfiguration config;

    public DbAccess(DbConfiguration config) {
        LOGGER.info("Initialize DB: " + config.postGreUploadDb + ", " + config.postGreUploadUrl + ", " + config.postGreUploadUser + ", " + config.postGreUploadPassword);
        this.config = config;
    }

    public void SavePartsToDataBase(PartMasterData[] parts) throws Exception{
        GetConnection();
        if (connection == null) {
            //throw new Exception("No connection to db established!");
        }
        EnsureTablesInDatabase();
        InsertPartsInDatabase(parts);
    }

    public PartMasterData[] GetPartsFromDatabase(String companyOneId) throws Exception {
        GetConnection();
        if (connection == null) {
            //throw new Exception("No connection to db established!");
        }
        return ReturnPartsFromDatabase(companyOneId);
    }

    private void InsertPartsInDatabase(PartMasterData[] parts) throws SQLException {
        
        LOGGER.info("Insert " + parts.length  + " parts in database");
        Instant dateTimeNowUtc = Instant.now();
        int i = 0;
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
            PreparedStatement deleteStatement = connection.prepareStatement("DELETE FROM parts WHERE uniqueid='" + part.UniqueData.uniqueId + "';");
            deleteStatement.executeUpdate();

            insertStatement.setString(1, part.UniqueData.customerUniqueId); //customerUniqueId
            insertStatement.setString(2, part.StaticData.customerContractOneId); //customerContractOneId
            insertStatement.setString(3, part.StaticData.customerOneId); //customerOneId
            insertStatement.setString(4, Arrays.toString(part.PartTree.isParentOf));//isParentOf
            insertStatement.setString(5, part.StaticData.manufacturerOneId); //manufacturerOneId
            insertStatement.setString(6, part.UniqueData.manufacturerUniqueId); //manufacturerUniqueId
            insertStatement.setString(7, part.StaticData.partNumberCustomer); //partNameCustomer
            insertStatement.setString(8, part.StaticData.partNameManufacturer); //partNameManufacturer
            insertStatement.setString(9, part.StaticData.partNumberCustomer); //partNumberCustomer
            insertStatement.setString(10, part.StaticData.partNumberManufacturer); //partNumberManufacturer
            insertStatement.setString(11, part.IndividualData.productionCountryCode); //productionCountryCode
            insertStatement.setString(12, part.IndividualData.productionDateGmt); //productionDateGmt
            insertStatement.setBoolean(13, part.QualityAlert.qualityAlert); //qualityAlert
            var qualType = String.valueOf(part.QualityAlert.qualityType);
            if (qualType == "null")
                qualType = "";
            insertStatement.setString(14, qualType);//part.qualityAlert.QualityType); //qualityType
            insertStatement.setString(15, part.StaticData.manufacturerContractOneId); //manufactureContractOneId
            insertStatement.setString(16, part.UniqueData.uniqueId); //uniqueId
            insertStatement.setTimestamp(17, Timestamp.from(dateTimeNowUtc));

            insertStatement.addBatch();
            i++;
            if (i % 1000 == 0 || i == parts.length) {
                insertStatement.executeBatch();
            }
        }
    }

    private PartMasterData[] ReturnPartsFromDatabase(String companyOneId) throws Exception
    {
        List<PartMasterData> parts = new ArrayList<PartMasterData>();

        LOGGER.info("Running query for manufacturer one id " + companyOneId);

        PreparedStatement readStatement = connection.prepareStatement("SELECT * FROM parts WHERE manufactureroneid='"+ companyOneId +"' AND importtimestamputc BETWEEN NOW() - INTERVAL '1 DAY' AND NOW();");
        ResultSet resultSet = readStatement.executeQuery();

        LOGGER.info("DB query completed successfully");

        while (resultSet.next())
        {
            PartMasterData p = new PartMasterData();
            p.UniqueData.customerUniqueId = resultSet.getString("customerUniqueId"); //customerUniqueId
            p.StaticData.customerContractOneId = resultSet.getString("customerContractOneId"); //customerContractOneId
            p.StaticData.customerOneId = resultSet.getString("customerOneId"); //customerOneId
            p.PartTree.isParentOf = resultSet.getString("isParentOf").split(",");//
            p.StaticData.manufacturerOneId = resultSet.getString("manufacturerOneId"); //manufacturerOneId
            p.UniqueData.manufacturerUniqueId = resultSet.getString("manufacturerUniqueId"); //manufacturerUniqueId
            p.StaticData.partNumberCustomer = resultSet.getString("partNameCustomer"); //partNameCustomer
            p.StaticData.partNameManufacturer = resultSet.getString("partNameManufacturer"); //partNameManufacturer
            p.StaticData.partNumberCustomer = resultSet.getString("partNumberCustomer"); //partNumberCustomer
            p.StaticData.partNumberManufacturer = resultSet.getString("partNumberManufacturer"); //partNumberManufacturer
            p.IndividualData.productionCountryCode = resultSet.getString("productionCountryCode"); //productionCountryCode
            p.IndividualData.productionDateGmt = resultSet.getString("productionDateGmt"); //productionDateGmt
            p.QualityAlert.qualityAlert = resultSet.getBoolean("qualityAlert"); //qualityAlert
            var qualType = resultSet.getString("qualityType");
            if(!qualType.equals("")) {
                p.QualityAlert.qualityType = AlertLevel.valueOf(resultSet.getString("qualityType"));
            }

            p.StaticData.manufacturerContractOneId= resultSet.getString("manufactureContractOneId"); //manufactureContractOneId
            p.UniqueData.uniqueId = resultSet.getString("uniqueId"); //uniqueId
            parts.add(p);
        }

        if (parts == null || parts.isEmpty()) {
            LOGGER.info("No parts found");
            return null;
        }
            
        return parts.toArray(new PartMasterData[parts.size()]);
    }

    private void GetConnection()
    {
        try {           
            LOGGER.info("Connecting to the database");
            DriverManager.registerDriver(new org.postgresql.Driver());
            LOGGER.info("DB Driver registered successfully: " + DriverManager.getDrivers().nextElement().getClass().getName());
            // jdbc:postgresql://catenax-poc-postgresql.postgres.database.azure.com:5432/{your_database}?user=postgresql@catenax-poc-postgresql&password={your_password}&sslmode=require
            String url = config.postGreUploadUrl + "/" + config.postGreUploadDb + "?user=" + config.postGreUploadUser + "&password=" + config.postGreUploadPassword + "&sslmode=require";
            LOGGER.info("Using connection url: " + url);
            this.connection = DriverManager.getConnection(url);
            LOGGER.info("Database connection test: " + connection.getCatalog());            
        } catch(SQLException sqlException) {
            LOGGER.severe("Connection to DB failed: " + sqlException.getMessage());
        }
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
        catch(SQLException sqlEx)
        {
            LOGGER.severe("Create tables in DB failed: " + sqlEx.getMessage());
        }
    }

}
