package com.alissonlimabr.microserviceazure.repository;

import com.alissonlimabr.microserviceazure.model.PasswordResetToken;
import com.alissonlimabr.microserviceazure.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Long> {

    PasswordResetToken findByToken(String token);

    PasswordResetToken findByUser(User user);
}

