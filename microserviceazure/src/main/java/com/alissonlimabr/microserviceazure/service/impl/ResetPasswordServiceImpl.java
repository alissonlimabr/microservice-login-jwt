package com.alissonlimabr.microserviceazure.service.impl;

import com.alissonlimabr.microserviceazure.model.PasswordResetToken;
import com.alissonlimabr.microserviceazure.model.User;
import com.alissonlimabr.microserviceazure.repository.PasswordResetTokenRepository;
import com.alissonlimabr.microserviceazure.repository.UserRepository;
import com.alissonlimabr.microserviceazure.service.EmailService;
import com.alissonlimabr.microserviceazure.service.ResetPasswordService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class ResetPasswordServiceImpl implements ResetPasswordService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordResetTokenRepository tokenRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void createPasswordResetTokenForUser(User user, String token) {
        PasswordResetToken resetToken = new PasswordResetToken();
        resetToken.setUser(user);
        resetToken.setToken(token);
        tokenRepository.save(resetToken);
    }

    public PasswordResetToken getPasswordResetToken(String token) {
        return tokenRepository.findByToken(token);
    }

    @Override
    public void sendPasswordResetEmail(String email) throws MessagingException {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (!optionalUser.isPresent()) {
            return;
        }
        User user = optionalUser.get();
        String token = UUID.randomUUID().toString();
        createPasswordResetTokenForUser(user, token);
        emailService.sendPasswordResetEmail(user.getEmail(), token);
    }


    @Override
    public void changePassword(String token, String newPassword, String emailRequest) throws MessagingException {
        PasswordResetToken resetToken = getPasswordResetToken(token);
        if (resetToken == null) {
            throw new MessagingException("Token inválido ou expirado!");
        }

        User user = resetToken.getUser();

        if (user == null || !user.getEmail().equals(emailRequest)) {
            throw new MessagingException("Usuário não encontrado ou e-mail inválido!");
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
        tokenRepository.delete(resetToken);
    }
}


