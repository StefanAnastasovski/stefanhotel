package com.mk.stefan.hotel.repositories;

import com.mk.stefan.hotel.model.Table;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TableRepository extends JpaRepository<Table, Long> {
    Optional<Table> getTableByTableNumber(String tableNumber);
}
