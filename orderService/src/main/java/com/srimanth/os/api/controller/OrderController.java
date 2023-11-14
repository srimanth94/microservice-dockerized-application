package com.srimanth.os.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.srimanth.os.api.cluster.TransactionRequest;
import com.srimanth.os.api.cluster.TransactionResponse;
import com.srimanth.os.api.entity.Order;
import com.srimanth.os.api.service.OrderService;

@RestController
@RequestMapping("/Order")
@CrossOrigin(origins = "*",maxAge = 4000)
public class OrderController {
	
	@Autowired
	private OrderService service;
	@PostMapping("/bookOrder")
	public TransactionResponse bookOrder(@RequestBody TransactionRequest request) {
		return service.saveOrder(request);
	}
	
	//get mapping
	@GetMapping("/getAll")
	public List<Order> getOrder() {
		return service.getOrder();
	}
	
	@GetMapping("/getById")
	public Optional<Order> getById(@RequestParam int id) {
		return service.getByOrderId(id);
	}

}
