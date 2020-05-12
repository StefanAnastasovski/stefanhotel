package com.mk.stefan.hotel.repositories;

import com.mk.stefan.hotel.model.TableReservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TableReservationRepository extends JpaRepository<TableReservation, Long> {
}
