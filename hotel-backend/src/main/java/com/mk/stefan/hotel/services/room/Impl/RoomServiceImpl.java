package com.mk.stefan.hotel.services.room.Impl;

import com.mk.stefan.hotel.model.Room;
import com.mk.stefan.hotel.repositories.RoomRepository;
import com.mk.stefan.hotel.services.room.RoomService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomServiceImpl implements RoomService {

    private final RoomRepository roomRepository;

    public RoomServiceImpl(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    @Override
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @Override
    public Optional<Room> getRoomByRoomNumber(String roomNumber) {
        return roomRepository.getRoomByRoomNumber(roomNumber);
    }
}
