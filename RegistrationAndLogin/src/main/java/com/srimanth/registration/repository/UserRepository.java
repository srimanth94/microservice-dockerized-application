package com.srimanth.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.srimanth.registration.dto.RequestDto;
import com.srimanth.registration.entity.Userdata;


public interface UserRepository extends JpaRepository<Userdata, Long>{

	Userdata findByEmail(String email);


}
