package com.alissonlimabr.microserviceazure.service.impl;

import com.alissonlimabr.microserviceazure.dto.request.SignInRequest;
import com.alissonlimabr.microserviceazure.dto.request.SignUpRequest;
import com.alissonlimabr.microserviceazure.dto.response.JwtAuthenticationResponse;
import com.alissonlimabr.microserviceazure.model.Role;
import com.alissonlimabr.microserviceazure.model.User;
import com.alissonlimabr.microserviceazure.repository.UserRepository;
import com.alissonlimabr.microserviceazure.service.AuthenticationService;
import com.alissonlimabr.microserviceazure.service.JwtService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    @Override
    public JwtAuthenticationResponse signup(SignUpRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Email já existe");
        }
        var user = User.builder().firstName(request.getFirstName()).lastName(request.getLastName())
                .email(request.getEmail()).password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER).build();
        userRepository.save(user);
        var jwt = jwtService.generateToken(user);
        log.error("signup Authentication");
        return JwtAuthenticationResponse.builder().token(jwt).build();
    }

    @Override
    public JwtAuthenticationResponse signin(SignInRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> {
                    log.error("Signin: E-mail ou senha inválidos");
                    return new IllegalArgumentException("E-mail ou senha inválidos");
                });
        var jwt = jwtService.generateToken(user);

        return JwtAuthenticationResponse.builder().token(jwt).build();
    }
}
