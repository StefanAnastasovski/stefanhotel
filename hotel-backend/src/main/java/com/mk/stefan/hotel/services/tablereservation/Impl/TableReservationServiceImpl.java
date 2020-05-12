package com.mk.stefan.hotel.services.tablereservation.Impl;

import com.mk.stefan.hotel.model.TableReservation;
import com.mk.stefan.hotel.repositories.TableReservationRepository;
import com.mk.stefan.hotel.services.tablereservation.TableReservationService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TableReservationServiceImpl implements TableReservationService {

    private final TableReservationRepository tableReservationRepository;

    public TableReservationServiceImpl(TableReservationRepository tableReservationRepository) {
        this.tableReservationRepository = tableReservationRepository;
    }

    @Override
    public List<TableReservation> getAllTableReservations() {
        return tableReservationRepository.findAll();
    }

    @Override
    public TableReservation createNewTableReseravtion(String firstName, String lastName, String phone,
                                                      String email, String numberOfPeople,
                                                      String startDate, String time,
                                                      String additionalRequest, String promoCode) {
        TableReservation tableReservation = new TableReservation(firstName, lastName,
                phone, email, numberOfPeople, startDate, time, additionalRequest, promoCode);

        return tableReservationRepository.save(tableReservation);

    }

}
