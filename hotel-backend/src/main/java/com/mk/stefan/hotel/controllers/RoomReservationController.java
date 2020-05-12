package com.mk.stefan.hotel.controllers;

import com.mk.stefan.hotel.model.RoomReservation;
import com.mk.stefan.hotel.services.roomreservation.RoomReservationService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class RoomReservationController {

    private final RoomReservationService roomReservationService;

    public RoomReservationController(RoomReservationService roomReservationService) {
        this.roomReservationService = roomReservationService;
    }

    @GetMapping("/getallroomreservations")
    public List<RoomReservation> getAllRoomReservations(){
        return roomReservationService.getAllRoomReservations();
    }

    @PostMapping("/createroomreservation")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public RoomReservation createNewRoomReservation(@RequestBody RoomReservation roomReservation,
                                                    HttpServletResponse response,
                                                    UriComponentsBuilder builder){

        RoomReservation roomReservation1 = new RoomReservation(roomReservation.getFirstName(),
                roomReservation.getLastName(), roomReservation.getPhone(), roomReservation.getEmail(),
                roomReservation.getNumberOfRooms(), roomReservation.getNumberOfGuests(),
                roomReservation.getStartDate(), roomReservation.getEndDate(),
                roomReservation.getAdditionalRequest(), roomReservation.getPromoCode());

        response.setHeader("Location", builder.path("/api/createroomreservation/"+
                roomReservation.getId()).buildAndExpand(roomReservation.getId()).toUriString());

        return roomReservationService.createNewRoomReservation(roomReservation1.getFirstName(),
                roomReservation1.getLastName(), roomReservation1.getPhone(), roomReservation1.getEmail(),
                roomReservation1.getNumberOfRooms(), roomReservation1.getNumberOfGuests(),
                roomReservation1.getStartDate(), roomReservation1.getEndDate(),
                roomReservation1.getAdditionalRequest(), roomReservation1.getPromoCode());
    };
}
