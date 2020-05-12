package com.mk.stefan.hotel.repositories;

import com.mk.stefan.hotel.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
