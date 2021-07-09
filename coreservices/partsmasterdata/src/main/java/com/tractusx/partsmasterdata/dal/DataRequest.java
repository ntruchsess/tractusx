package com.tractusx.partsmasterdata.dal;

import javax.net.ssl.HttpsURLConnection;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Calendar;
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
    public static String URL_PARAMETERS = "";

    private DateFormat dateFormat = new SimpleDateFormat("YYYY-MM-dd");


    public PartMasterData[] GetParts(ReqConfig config)
    {
        PartMasterData[] retVal = null;
        String parts = executePost(config);
        if(parts != "")
        {
            String searchFor = "response: ";
            String lowerParts = parts.toLowerCase();
            int contentStartIndex = lowerParts.indexOf(searchFor);
            if(contentStartIndex != -1)
            {
                parts = parts.substring(contentStartIndex + searchFor.length());
            }

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
        {
            ex.printStackTrace();
            System.err.println(ex.getClass().getName()+": "+ex.getMessage());}
        return retVal;
    }

    private String executePost(ReqConfig config)
    {
        String retVal = "";
        try {
            //Timeframe for parts
            Calendar fromCal = Calendar.getInstance();
            fromCal.add(Calendar.HOUR,config.loadLastNHours * -1);
            Calendar toCal = Calendar.getInstance();

            String urlWithParams = config.postUrl + "?recipient=" + encodeValue(config.recipient) + "&requestedArtifact=" + encodeValue(config.requestedArtifact) + "&transferContract=" + encodeValue(config.transferContract) + "&key=" + config.key;

            HttpURLConnection con = (HttpURLConnection) new URL(urlWithParams).openConnection();
            con.setRequestMethod("POST");
            con.setDoOutput(true);
            con.setDoInput(true);

            //Auth
            String userCredentials = config.authUsername + ":" + config.authPassword;
            String basicAuth = "Basic " + new String(Base64.getEncoder().encode(userCredentials.getBytes()));
            con.setRequestProperty ("Authorization", basicAuth);

            //Params
            con.setRequestProperty("content-type", "application/json");

            //Body
            String postBody = "{\"headers\": { \"x-api-key\": \"" + config.xApiKey + "\"},\"params\": {\"companyOneId\": \"" + config.companyOneId + "\",\"productionDateFrom\": \"" + dateFormat.format(fromCal.getTime()) + "T00:00:00.000z\",\"productionDateTo\": \"" + dateFormat.format(toCal.getTime()) + "T00:00:00.000z\"}}";
            java.io.OutputStream os = con.getOutputStream();
            java.io.OutputStreamWriter osw = new java.io.OutputStreamWriter(os, "UTF-8");
            osw.write(postBody);
            osw.flush();
            osw.close();
            os.close();

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
            }
            else {
                System.out.println("GET request not worked");
            }
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
            System.err.println(ex.getClass().getName()+": "+ex.getMessage());
        }
        return retVal;
    }


    private String encodeValue(String value) {
        String retVal = "";
        try {
            retVal = java.net.URLEncoder.encode(value, StandardCharsets.UTF_8.toString());
        } catch (UnsupportedEncodingException ex) {
            ex.printStackTrace();
            System.err.println(ex.getClass().getName()+": "+ex.getMessage());
        }
        return retVal;
    }
}
