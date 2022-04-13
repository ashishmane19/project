package com.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@SpringBootApplication
@ComponentScan("com.app")
public class StadiumSeatBookingApplication {

	public static void main(String[] args) {
		SpringApplication.run(StadiumSeatBookingApplication.class, args);
	}

}
