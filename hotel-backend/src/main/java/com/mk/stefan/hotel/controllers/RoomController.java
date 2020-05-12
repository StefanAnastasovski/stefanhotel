package com.mk.stefan.hotel.controllers;

import com.mk.stefan.hotel.model.Room;
import com.mk.stefan.hotel.services.room.RoomService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class RoomController {

    private final RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @GetMapping("/getallrooms")
    public List<Room> getAllRooms() {
        return roomService.getAllRooms();
    }

    @GetMapping("/getroombyroomnumber/{roomNumber}")
    public Optional<Room> getRoomByRoomNumber(@PathVariable String roomNumber){
        return roomService.getRoomByRoomNumber(roomNumber);
    }

}
