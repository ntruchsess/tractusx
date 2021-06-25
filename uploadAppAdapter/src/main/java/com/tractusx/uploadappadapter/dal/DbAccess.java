package com.tractusx.uploadappadapter.dal;


import com.tractusx.uploadappadapter.models.PartMasterData;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class DbAccess {

    private Connection connection;
    private DbConfiguration config;

    public DbAccess(DbConfiguration config)
    {
        this.config = config;
    }

    public void SavePartsToDataBase(PartMasterData[] parts)
    {
        GetConnection();

        if(connection == null)
        {
            //throw new Exception("No connection to db established!");
        }

        CreateDatabase();


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

    private void CreateDatabase()
    {
        try
        {
            Statement st = connection.createStatement();
            ResultSet rs = st.executeQuery("CREATE DATABASE " + config.postGreUploadDb);
        }
        catch(Exception ex)
        {}
    }

}
