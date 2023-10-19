package com.alissonlimabr.microserviceazure.service;

import com.alissonlimabr.microserviceazure.model.PasswordResetToken;
import com.alissonlimabr.microserviceazure.model.User;
import jakarta.mail.MessagingException;

public interface ResetPasswordService {
    void sendPasswordResetEmail(String email) throws MessagingException;
    void changePassword(String token, String newPassword, String emailRequest) throws MessagingException;
    void createPasswordResetTokenForUser(User user, String token);
    PasswordResetToken getPasswordResetToken(String token);
}
