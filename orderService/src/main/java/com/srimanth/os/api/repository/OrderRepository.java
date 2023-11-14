package com.srimanth.os.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.srimanth.os.api.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Integer>{

}
