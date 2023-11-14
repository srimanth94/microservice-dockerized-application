package com.srimanth.hystrix.dashboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;


@SpringBootApplication
public class HystrixDashBoardApplication {

	public static void main(String[] args) {
		SpringApplication.run(HystrixDashBoardApplication.class, args);
	}

}
