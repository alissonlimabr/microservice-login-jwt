package com.alissonlimabr.microserviceazure.service.impl;

import com.alissonlimabr.microserviceazure.repository.UserRepository;
import com.alissonlimabr.microserviceazure.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    @Override
    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
                return userRepository.findByEmail(username).orElseThrow(() -> {
                    log.error("loadUserByUsername: Usuário não encontrado!");
                    return new UsernameNotFoundException("Usuário não encontrado!");
                });
            }
        };
    }
}
