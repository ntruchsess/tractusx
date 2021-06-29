package com.tsystems.simplescheduler.configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.fraunhofer.iais.eis.ids.jsonld.Serializer;
import feign.Client;
import feign.auth.BasicAuthRequestInterceptor;
import feign.codec.Decoder;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.conn.ssl.TrustSelfSignedStrategy;
import org.apache.http.ssl.SSLContextBuilder;
import org.springframework.beans.factory.ObjectFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.http.HttpMessageConverters;
import org.springframework.cloud.openfeign.support.ResponseEntityDecoder;
import org.springframework.cloud.openfeign.support.SpringDecoder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpInputMessage;
import org.springframework.http.HttpOutputMessage;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.HttpMessageNotWritableException;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;

import javax.net.ssl.SSLSocketFactory;
import java.io.IOException;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

public class DataspaceConnectorConfiguration {
    @Bean
    public BasicAuthRequestInterceptor dataspaceAdminAuth(@Value("${scheduler.connector.login}") String login,
                                                          @Value("${scheduler.connector.password}") String password) {
        return new BasicAuthRequestInterceptor(login, password);
    }

    @Bean
    public Decoder decoder() {
        var jacksonMapper = new MappingJackson2HttpMessageConverter(new ObjectMapper());

        var dataspaceConverter = new HttpMessageConverter() {
            private final Serializer serializer = new Serializer();

            @Override
            public List<MediaType> getSupportedMediaTypes() {
                return List.of(MediaType.APPLICATION_JSON, MediaType.TEXT_PLAIN);
            }

            @Override
            public Object read(Class aClass, HttpInputMessage httpInputMessage) throws IOException, HttpMessageNotReadableException {
                return serializer.deserialize(new String(httpInputMessage.getBody().readAllBytes()), aClass);
            }

            @Override
            public void write(Object o, MediaType mediaType, HttpOutputMessage httpOutputMessage) throws IOException, HttpMessageNotWritableException {
                httpOutputMessage.getBody().write(serializer.serialize(o).getBytes());
            }

            @Override
            public boolean canWrite(Class aClass, MediaType mediaType) {
                return true;
            }

            @Override
            public boolean canRead(Class aClass, MediaType mediaType) {
                return aClass != String.class;
            }
        };
        ObjectFactory<HttpMessageConverters> factory = () -> new HttpMessageConverters(dataspaceConverter, jacksonMapper);
        return new ResponseEntityDecoder(new SpringDecoder(factory));
    }

    @Bean
    public Client client() throws NoSuchAlgorithmException, KeyStoreException, KeyManagementException {
        return new Client.Default(this.sslSocketFactory(), new NoopHostnameVerifier());
    }

    private SSLSocketFactory sslSocketFactory() throws NoSuchAlgorithmException, KeyStoreException, KeyManagementException {
        return SSLContextBuilder.create().loadTrustMaterial(new TrustSelfSignedStrategy()).build().getSocketFactory();
    }
}
