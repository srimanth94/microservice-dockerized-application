package com.srimanth.cloud.gateway;

import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Mono;

@RestController
public class FallBackController {

	@RequestMapping("/orderServiceFallBack")
	public Mono<String> orderFallback(){
		return Mono.just("ORDER-SERVICE is currently down ,please try again later");
	}
	
	@RequestMapping("/paymentServiceFallBack")
	public Mono<String> paymentFallback(){
		return Mono.just("PAYMENT-SERVICE is currently down , pleasr try again later");
	}
}
