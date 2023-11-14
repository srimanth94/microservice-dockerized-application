package com.srimanth.ps.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.srimanth.ps.api.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer>{

}