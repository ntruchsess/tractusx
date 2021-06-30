package com.tractusx.partsmasterdata.dal;

import com.tractusx.partsmasterdata.PartsmasterdataApplication;
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
        InsertPartsInDatabase(parts);
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
