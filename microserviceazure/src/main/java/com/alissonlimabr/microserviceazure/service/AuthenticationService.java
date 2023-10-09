package com.alissonlimabr.microserviceazure.service;

import com.alissonlimabr.microserviceazure.DTO.request.SignInRequest;
import com.alissonlimabr.microserviceazure.DTO.request.SignUpRequest;
import com.alissonlimabr.microserviceazure.DTO.response.JwtAuthenticationResponse;

public interface AuthenticationService{

    JwtAuthenticationResponse signup(SignUpRequest request);
    JwtAuthenticationResponse signin(SignInRequest request);
}