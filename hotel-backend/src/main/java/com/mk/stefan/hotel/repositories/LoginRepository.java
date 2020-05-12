package com.mk.stefan.hotel.repositories;

import com.mk.stefan.hotel.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LoginRepository extends JpaRepository<Login, Long> {
    Optional<Login> findByUsername(String username);
}
