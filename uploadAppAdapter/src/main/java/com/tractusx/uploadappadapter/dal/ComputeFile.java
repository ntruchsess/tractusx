package com.tractusx.uploadappadapter.dal;

import com.tractusx.uploadappadapter.models.CsvPart;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.stream.Collectors;

public class ComputeFile {
    public void Extract(MultipartFile file) {
        String[] LinesInFile = ReadLines(file);
        CsvPart[] retVal = GetParts(LinesInFile);
    }

    private CsvPart[] GetParts(String[] linesInFile) {
        List<CsvPart> parts = new ArrayList<>();
        for (String s : linesInFile) {
            parts.add(new CsvPart(s));
        }
        return parts.toArray(new CsvPart[parts.size()]);
    }


    private String[] ReadLines(MultipartFile file) {
        List<String> retVal = null;
        try
        {
            InputStream inputStream = file.getInputStream();
            BufferedReader br = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8));
            retVal = br.lines().skip(1).collect(Collectors.toList());
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
        }

        return retVal.toArray(new String[retVal.size()]);
    }

}
