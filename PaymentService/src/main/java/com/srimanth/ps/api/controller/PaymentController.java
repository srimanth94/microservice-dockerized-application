package com.srimanth.ps.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.srimanth.ps.api.entity.Payment;
import com.srimanth.ps.api.service.PaymentService;
@RestController
@RequestMapping("/Payment")
@CrossOrigin(origins = "*")
public class PaymentController {

	@Autowired
	private PaymentService service;
	
	@PostMapping("/doPayment")
	public Payment doPayment(@RequestBody Payment payment) {
		return service.doPayment(payment);
	}
	
	@GetMapping("/viewPayments")
	public List<Payment> viewPayments(){
		return service.viewAll();
	}
}