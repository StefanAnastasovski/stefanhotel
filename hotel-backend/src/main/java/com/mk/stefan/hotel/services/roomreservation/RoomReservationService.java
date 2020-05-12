package com.mk.stefan.hotel.services.roomreservation;

import com.mk.stefan.hotel.model.RoomReservation;

import java.util.List;

public interface RoomReservationService {

    List<RoomReservation> getAllRoomReservations();

    RoomReservation createNewRoomReservation(String firstName, String lastName,
                                             String phone, String email,
                                             String numberOfRooms, String numberOfGuests,
                                             String startDate, String endDate,
                                             String additionalRequest, String promoCode);

}
