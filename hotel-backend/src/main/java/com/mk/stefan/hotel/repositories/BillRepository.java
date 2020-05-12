package com.mk.stefan.hotel.repositories;

import com.mk.stefan.hotel.model.Bill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillRepository extends JpaRepository<Bill, Long> {
}
