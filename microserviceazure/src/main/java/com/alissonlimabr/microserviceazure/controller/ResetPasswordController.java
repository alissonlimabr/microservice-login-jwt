package com.alissonlimabr.microserviceazure.controller;

import com.alissonlimabr.microserviceazure.dto.request.PasswordResetRequest;
import com.alissonlimabr.microserviceazure.service.ResetPasswordService;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/jwt/v1/auth/reset-password")
@RequiredArgsConstructor
public class ResetPasswordController {
    private final ResetPasswordService resetPasswordService;

    @PostMapping("/forgot")
    public ResponseEntity<Map<String, String>> forgotPassword(@RequestParam String email) throws MessagingException {
        resetPasswordService.sendPasswordResetEmail(email);
        Map<String, String> responseBody = new HashMap<>();
        responseBody.put("message", "Solicitação de alteração de senha enviada com sucesso.");
        return ResponseEntity.ok(responseBody);
    }

    @PostMapping("/{token}")
    public ResponseEntity<Map<String, String>> resetPassword(@PathVariable String token,
                                                             @RequestBody PasswordResetRequest request)  {
        try {
            resetPasswordService.changePassword(token, request.getNewPassword(), request.getEmail());
            Map<String, String> response = new HashMap<>();
            response.put("message", "Senha alterada com sucesso.");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (MessagingException e) {
            Map<String, String> response = new HashMap<>();
            response.put("error", e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }
}

