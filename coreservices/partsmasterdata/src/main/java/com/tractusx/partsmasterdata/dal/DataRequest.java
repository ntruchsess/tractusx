package com.tractusx.partsmasterdata.dal;

import javax.net.ssl.HttpsURLConnection;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tractusx.partsmasterdata.PartsmasterdataApplication;
import com.tractusx.partsmasterdata.models.PartMasterData;
import kotlin.jvm.internal.TypeReference;

public class DataRequest {
    public static String USER_AGENT = "Mozilla/5.0";
    public static String GET_URL = "https://e5bjkagoqi.execute-api.eu-west-1.amazonaws.com/development/relationships-knowledge?companyOneId=Partner_00007_BMW&productionDateFrom=2021-06-30T00%3A00%3A00.000Z&productionDateTo=2021-07-05T00%3A00%3A00.000Z";
    public static String URL_PARAMETERS = "";

    private DateFormat dateFormat = new SimpleDateFormat("YYYY-MM-dd");


    public PartMasterData[] GetParts(String companyOneId, Date productionDateFrom, Date productionDateTo, String getUrl, String xApiKey)
    {
        PartMasterData[] retVal = null;
        String parts = executeGet(companyOneId, productionDateFrom, productionDateTo, getUrl, xApiKey);
        if(parts != "")
        {
            //retVal =
            InterimPart[] interimParts = createInterimParts(parts);
            retVal = createParts(interimParts);
        }

        return retVal;
    }

    private PartMasterData[] createParts(InterimPart[] interimParts) {
        PartMasterData[] retVal = new PartMasterData[interimParts.length];
        for(int i = 0; i < interimParts.length; i++)
        {
            PartMasterData part = new PartMasterData();
            part.UniqueData.uniqueId = interimParts[i].customerUniqueId;
            part.StaticData.manufacturerOneId = interimParts[i].manufacturerOneId;
            part.PartTree.isParentOf = interimParts[i].isParentOf;

            retVal[i] = part;
        }
        return retVal;
    }

    private InterimPart[] createInterimParts(String parts) {
        InterimPart[] retVal = null;
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.disable(DeserializationFeature.FAIL_ON_NULL_FOR_PRIMITIVES,
                    DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);

            retVal = objectMapper.readValue(parts, InterimPart[].class);
        }
        catch(JsonProcessingException ex)
        {}
        return retVal;
    }

    private String executeGet(String companyOneId, Date productionDateFrom, Date productionDateTo, String getUrl, String xApiKey)
    {
        String retVal = "";
        try {
            URL endpointUrl = new URL(String.format(String.format(getUrl + "?companyOneId=" + companyOneId + "&productionDateFrom=" + dateFormat.format(productionDateFrom) + "T00:00:00.000Z&productionDateTo=" + dateFormat.format(productionDateTo) + "T00:00:00.000Z")));
            HttpsURLConnection con = (HttpsURLConnection) endpointUrl.openConnection();
            con.setRequestMethod("GET");
            con.setRequestProperty("User-Agent", USER_AGENT);
            con.setRequestProperty("x-api-key", xApiKey);
            int responseCode = con.getResponseCode();
            System.out.println("GET Response Code :: " + responseCode);
            if (responseCode == HttpsURLConnection.HTTP_OK) { // success
                BufferedReader in = new BufferedReader(new InputStreamReader(
                        con.getInputStream()));
                String inputLine;
                StringBuffer response = new StringBuffer();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();

                // print result
                retVal = response.toString();
                //System.out.println(response.toString());
            } else {
                System.out.println("GET request not worked");
            }
        }
        catch(Exception ex)
        {

        }
        return retVal;
    }
}
