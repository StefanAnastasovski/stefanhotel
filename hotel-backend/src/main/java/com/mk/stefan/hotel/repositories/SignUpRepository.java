package com.mk.stefan.hotel.repositories;

import com.mk.stefan.hotel.model.SignUp;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SignUpRepository extends JpaRepository<SignUp, Long> {
    Optional<SignUp> getSignUpByUsername(String username);
}
