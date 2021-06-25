package com.tsystems.simplescheduler.configuration;

import feign.Client;
import feign.auth.BasicAuthRequestInterceptor;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.conn.ssl.TrustSelfSignedStrategy;
import org.apache.http.ssl.SSLContextBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;

import javax.net.ssl.SSLSocketFactory;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;

public class DataspaceConnectorConfiguration {
    @Bean
    public BasicAuthRequestInterceptor dataspaceAdminAuth(@Value("${scheduler.connector.login}") String login,
                                                          @Value("${scheduler.connector.password}") String password) {
        return new BasicAuthRequestInterceptor(login, password);
    }

    @Bean
    public Client client() throws NoSuchAlgorithmException, KeyStoreException, KeyManagementException {
        return new Client.Default(this.sslSocketFactory(), new NoopHostnameVerifier());
    }

    private SSLSocketFactory sslSocketFactory() throws NoSuchAlgorithmException, KeyStoreException, KeyManagementException {
        return SSLContextBuilder.create().loadTrustMaterial(new TrustSelfSignedStrategy()).build().getSocketFactory();
    }
}
