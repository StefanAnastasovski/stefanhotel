package com.mk.stefan.hotel.services.roomreservation.Impl;

import com.mk.stefan.hotel.model.RoomReservation;
import com.mk.stefan.hotel.repositories.RoomReservationRepository;
import com.mk.stefan.hotel.services.roomreservation.RoomReservationService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomReservationServiceImpl implements RoomReservationService {

    private final RoomReservationRepository roomReservationRepository;

    public RoomReservationServiceImpl(RoomReservationRepository roomReservationRepository) {
        this.roomReservationRepository = roomReservationRepository;
    }

    @Override
    public List<RoomReservation> getAllRoomReservations() {
        return roomReservationRepository.findAll();
    }

    @Override
    public RoomReservation createNewRoomReservation(String firstName, String lastName,
                                                    String phone, String email,
                                                    String numberOfRooms, String numberOfGuests,
                                                    String startDate, String endDate,
                                                    String additionalRequest, String promoCode) {
        RoomReservation roomReservation = new RoomReservation(
                firstName, lastName, phone, email, numberOfRooms, numberOfGuests, startDate, endDate,
                additionalRequest, promoCode);

        return this.roomReservationRepository.save(roomReservation);
    }
}
