package com.tractusx.partsmasterdata.dal;

import com.tractusx.partsmasterdata.PartsmasterdataApplication;
import com.tractusx.partsmasterdata.models.AlertLevel;
import com.tractusx.partsmasterdata.models.DbPartMasterData;
import com.tractusx.partsmasterdata.models.PartMasterData;

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
        InsertParts(parts);
    }

    private void InsertParts(PartMasterData[] parts) {
        for(PartMasterData part:parts)
        {
            DbPartMasterData dbPart = null;

            //Find current part in db
            var dbParts = getPartsById(part.UniqueData.uniqueId);
            if(dbPart != null)
            {
                for(var p:dbParts){
                    if(p.validUntilUtc == null)
                    {
                        dbPart = p;
                    }
                }
            }

            if(dbPart != null)
            {
                if(dbPart.isTempPart) {
                    //Update with complete details
                    UpdatePart(dbPart.id, part);
                    AddPartRelations(dbPart.id, part);
                    continue;
                }
                else {
                    //set validUntil date
                    SetValidUntilTimestamp(dbPart.id);
                }
            }

            int id = InsertPart(part, false);
            AddPartRelations(id, part);

        }
    }

    private void AddPartRelations(int id, PartMasterData part) {

        for(String partUId:part.PartTree.isParentOf) {
            DbPartMasterData[] dbParts = getPartsById(partUId);
            Boolean insertDone = false;
            for(DbPartMasterData dbPart:dbParts)
            {
                if(!dbPart.isTempPart && dbPart.validUntilUtc == null)
                {
                    insertRelation(id, dbPart.id);
                    insertDone = true;
                    break;
                }
            }

            //No part found, create temp part and add relation
            if(!insertDone)
            {
                PartMasterData tempPart = new PartMasterData();
                tempPart.UniqueData.uniqueId = partUId;
                int tempPartId = InsertPart(tempPart,true);
                insertRelation(id, tempPartId);
            }

        }

    }

    private void insertRelation(int parentDbId, int childDbId) {
        try {
            PreparedStatement insertStatement = connection
                    .prepareStatement("INSERT INTO partrelations (" +
                            "parentpartid," +
                            "childpartid) VALUES (?,?);");

            insertStatement.setInt(1, parentDbId);
            insertStatement.setInt(2, childDbId);
        }
        catch (Exception ex){}
    }

    private void SetValidUntilTimestamp(int id) {
        try
        {
            Instant dateTimeNowUtc = Instant.now();
            PreparedStatement updateStatement = connection
                    .prepareStatement("UPDATE parts SET validUntilUtc = ? WHERE id = ?");
                updateStatement.setTimestamp(1,Timestamp.from(dateTimeNowUtc));
                updateStatement.setInt(2,id);

                updateStatement.execute();
        }
        catch(Exception ex)
        {}
    }



    private void UpdatePart(int id, PartMasterData part)
    {
        try {
            Instant dateTimeNowUtc = Instant.now();
            PreparedStatement updateStatement = connection
                    .prepareStatement("UPDATE parts SET " +
                            "isTempPart = ?," +
                            "manufacturerOneId = ?," +
                            "manufactureContractOneId = ?," +
                            "uniqueId = ?," +
                            "manufacturerUniqueId = ?," +
                            "customerUniqueId = ?," +
                            "qualityAlert = ?," +
                            "qualityType = ?," +
                            "importTimestampUtc = ?," +
                            "validUntilUtc = ? WHERE id = ?");

            updateStatement.setBoolean(1, false);

            updateStatement.setString(2, part.StaticData.manufacturerOneId);
            updateStatement.setString(3, part.StaticData.manufacturerContractOneId);
            updateStatement.setString(4, part.UniqueData.uniqueId);
            updateStatement.setString(5, part.UniqueData.manufacturerUniqueId);
            updateStatement.setString(6, part.UniqueData.customerUniqueId);
            updateStatement.setBoolean(7, part.QualityAlert.qualityAlert);
                var qualType = String.valueOf(part.QualityAlert.qualityType);
                if (qualType == "null")
                    qualType = "";
            updateStatement.setString(8, qualType);//qualityType
            updateStatement.setTimestamp(9, Timestamp.from(dateTimeNowUtc));

            updateStatement.setInt(10,id);

            updateStatement.execute();
        }
        catch(Exception ex)
        {}
    }


    private int InsertPart(PartMasterData part, Boolean isTemp)
    {
        int retVal = -1;
        try {
            Instant dateTimeNowUtc = Instant.now();
            PreparedStatement insertStatement = connection
                    .prepareStatement("INSERT INTO parts (" +
                            "isTempPart," +
                            "manufacturerOneId," +
                            "manufactureContractOneId," +
                            "uniqueId," +
                            "manufacturerUniqueId," +
                            "customerUniqueId," +
                            "qualityAlert," +
                            "qualityType," +
                            "importTimestampUtc," +
                            "validUntilUtc) VALUES (?,?,?,?,?,?,?,?,?,?) RETURNING id;");

            insertStatement.setBoolean(1, isTemp);
            insertStatement.setString(4, part.UniqueData.uniqueId);

            if (!isTemp) {
                insertStatement.setString(2, part.StaticData.manufacturerOneId);
                insertStatement.setString(3, part.StaticData.manufacturerContractOneId);
                //4 is already set
                insertStatement.setString(5, part.UniqueData.manufacturerUniqueId);
                insertStatement.setString(6, part.UniqueData.customerUniqueId);

                insertStatement.setBoolean(7, part.QualityAlert.qualityAlert);
                var qualType = String.valueOf(part.QualityAlert.qualityType);
                if (qualType == "null")
                    qualType = "";
                insertStatement.setString(8, qualType);
                insertStatement.setTimestamp(9, Timestamp.from(dateTimeNowUtc));

                insertStatement.execute();

                ResultSet lastInsert = insertStatement.getResultSet();
                lastInsert.next();
                retVal = lastInsert.getInt(1);
            }
        }
        catch(Exception ex)
        { }

        return retVal;
    }




    private DbPartMasterData[] getPartsById(String uniqueId)
    {
        try {
            PreparedStatement readStatement = connection.prepareStatement("SELECT * FROM parts WHERE uniqueId='" + uniqueId + "';");
            ResultSet resultSet = readStatement.executeQuery();

            List<DbPartMasterData> retVal = new ArrayList<>();

            while(resultSet.next()) {
                DbPartMasterData p = new DbPartMasterData();
                p.id = resultSet.getInt("id");
                p.isTempPart = resultSet.getBoolean("isTempPart");
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
                if (!qualType.equals("")) {
                    p.QualityAlert.qualityType = AlertLevel.valueOf(resultSet.getString("qualityType"));
                }

                p.StaticData.manufacturerContractOneId = resultSet.getString("manufactureContractOneId"); //manufactureContractOneId
                p.UniqueData.uniqueId = resultSet.getString("uniqueId"); //uniqueId

                p.validUntilUtc = resultSet.getTimestamp("validUntilUtc");
                retVal.add(p);
            }

            return retVal.toArray(new DbPartMasterData[retVal.size()]);
        }
        catch (Exception ex)
        {}
        return null;
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
            Scanner scanner = new Scanner(PartsmasterdataApplication.class.getClassLoader().getResourceAsStream("schema.sql"));
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
