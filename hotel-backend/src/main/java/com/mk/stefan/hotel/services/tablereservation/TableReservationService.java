package com.mk.stefan.hotel.services.tablereservation;

import com.mk.stefan.hotel.model.TableReservation;

import java.util.List;
import java.util.Optional;

public interface TableReservationService {

    List<TableReservation> getAllTableReservations();

    TableReservation createNewTableReseravtion(String firstName, String lastName,
                                               String phone, String email,
                                               String numberOfPeople, String startDate,
                                               String time, String additionalRequest,
                                               String promoCode);
}
