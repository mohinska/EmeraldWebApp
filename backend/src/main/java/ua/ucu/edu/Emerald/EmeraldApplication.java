package ua.ucu.edu.Emerald;

import java.util.TimeZone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmeraldApplication {

	public static void main(String[] args) {
		TimeZone.setDefault(TimeZone.getTimeZone("Europe/Kyiv"));
		SpringApplication.run(EmeraldApplication.class, args);
	}

}
