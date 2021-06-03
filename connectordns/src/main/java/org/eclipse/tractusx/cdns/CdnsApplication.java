package org.eclipse.tractusx.cdns;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class CdnsApplication {

	@RequestMapping("/")
	public String home() {
		return "Hello from the CDNS Service!!!";
	}

	public static void main(String[] args) {
		SpringApplication.run(CdnsApplication.class, args);
	}

}
