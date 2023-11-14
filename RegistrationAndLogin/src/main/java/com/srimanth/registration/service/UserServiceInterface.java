package com.srimanth.registration.service;

import com.srimanth.registration.dto.RequestDto;
import com.srimanth.registration.entity.Userdata;

public interface UserServiceInterface {

	String register(RequestDto requestDto);
	
	String login(RequestDto requestDto);
}
