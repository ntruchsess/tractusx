package com.tractusx.partsmasterdata.dal;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Configuration
@ConfigurationProperties(prefix = "postgre")
public class DbConfiguration {
    public void setPostGreUrl(String postGreUploadUrl){ this.postGreUploadUrl = postGreUploadUrl;}
    public String postGreUploadUrl;

    public void setPostGreUser(String postGreUploadUser){ this.postGreUploadUser = postGreUploadUser;}
    public String postGreUploadUser;

    public void setPostGrePassword(String postGreUploadPassword){ this.postGreUploadPassword = postGreUploadPassword;}
    public String postGreUploadPassword;

    public void setPostGreDb(String postGreUploadDb){ this.postGreUploadDb = postGreUploadDb;}
    public String postGreUploadDb;
}
