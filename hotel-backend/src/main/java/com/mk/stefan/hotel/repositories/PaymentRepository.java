package com.mk.stefan.hotel.repositories;

import com.mk.stefan.hotel.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PaymentRepository extends JpaRepository<Payment, Long> {
}
