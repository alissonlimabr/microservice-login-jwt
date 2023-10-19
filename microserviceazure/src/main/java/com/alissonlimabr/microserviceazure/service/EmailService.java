package com.alissonlimabr.microserviceazure.service;

import jakarta.mail.MessagingException;
public interface EmailService {
    void sendPasswordResetEmail(String recipient, String token) throws MessagingException;
}

