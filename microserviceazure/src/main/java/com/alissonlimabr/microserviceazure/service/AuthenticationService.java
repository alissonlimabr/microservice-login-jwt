package com.alissonlimabr.microserviceazure.service;

import com.alissonlimabr.microserviceazure.dto.request.SignInRequest;
import com.alissonlimabr.microserviceazure.dto.request.SignUpRequest;
import com.alissonlimabr.microserviceazure.dto.response.JwtAuthenticationResponse;

public interface AuthenticationService{

    JwtAuthenticationResponse signup(SignUpRequest request);
    JwtAuthenticationResponse signin(SignInRequest request);
}