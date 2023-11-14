package com.srimanth.os.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.srimanth.os.api.cluster.Payment;
import com.srimanth.os.api.cluster.TransactionRequest;
import com.srimanth.os.api.cluster.TransactionResponse;
import com.srimanth.os.api.entity.Order;
import com.srimanth.os.api.repository.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository repo;
	
	@Autowired
	private RestTemplate template;
	
	public TransactionResponse saveOrder(TransactionRequest request) {
		String message="";
		Order order=request.getOrder();
		Payment payment=request.getPayment();
		payment.setOrderId(order.getId());
		payment.setAmount(order.getPrice());
		Payment paymentResponse=template.postForObject("http://PAYMENT-SERVICE/Payment/doPayment", payment,Payment.class);
		message=paymentResponse.getPaymentStatus().equals("successful")?"successful your order got placed":"order unsucessful, item added to the cart :)";
		repo.save(order);
		TransactionResponse response=new TransactionResponse();
		response.setAmount(order.getPrice());
		response.setMessage(message);
		response.setTransactionId(paymentResponse.getTranscationId());
		response.setOrderId(paymentResponse.getOrderId());
		return response;
	}
	
	//getmapping
	public List<Order> getOrder( ) {
		return repo.findAll();
	}
	
	//get by orderId
	public Optional<Order> getByOrderId(int id) {
		return repo.findById(id);
	}

}
