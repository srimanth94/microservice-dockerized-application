package com.srimanth.ps.api.service;

import java.util.List;
import java.util.Random;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srimanth.ps.api.entity.Payment;
import com.srimanth.ps.api.repository.PaymentRepository;

@Service
public class PaymentService {

	@Autowired
	private PaymentRepository repo;
	
	public Payment doPayment(Payment payment) {
		payment.setPaymentStatus(ispaymentStatus());
		payment.setTranscationId(UUID.randomUUID().toString());
		return repo.save(payment);
	}
	
	//payment status
	
	public String ispaymentStatus() {
		return new Random().nextBoolean()?"successful":"unsucessful";
	}
	
	//payment get api
	public List<Payment> viewAll() {
		return repo.findAll();
	}
}