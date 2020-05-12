package com.mk.stefan.hotel.services.room;

import com.mk.stefan.hotel.model.Room;

import java.util.List;
import java.util.Optional;

public interface RoomService {

    List<Room> getAllRooms();

    Optional<Room> getRoomByRoomNumber(String roomNumber);

}
