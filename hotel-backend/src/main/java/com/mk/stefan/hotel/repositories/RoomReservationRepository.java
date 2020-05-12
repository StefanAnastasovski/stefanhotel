package com.mk.stefan.hotel.repositories;

import com.mk.stefan.hotel.model.RoomReservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomReservationRepository extends JpaRepository<RoomReservation, Long> {
}
