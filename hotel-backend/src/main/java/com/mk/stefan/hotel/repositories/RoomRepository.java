package com.mk.stefan.hotel.repositories;

import com.mk.stefan.hotel.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room, Long> {

    Optional<Room> getRoomByRoomNumber(String roomNumber);

}
