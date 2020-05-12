package com.mk.stefan.hotel.controllers;

import com.mk.stefan.hotel.model.TableReservation;
import com.mk.stefan.hotel.services.tablereservation.TableReservationService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class TableReservationController {

   private final TableReservationService tableReservationService;

    public TableReservationController(TableReservationService tableReservationService) {
        this.tableReservationService = tableReservationService;
    }

    @GetMapping("/getalltablereservation")
    public List<TableReservation> getAllTableReservations() {
        return tableReservationService.getAllTableReservations();
    }

    @PostMapping("/createtablereservation")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public TableReservation createNewTableReservation(@RequestBody TableReservation tableReservation,
                                                      HttpServletResponse response,
                                                      UriComponentsBuilder builder){
        TableReservation tableReservation1 = new TableReservation(tableReservation.getFirstName(),
                tableReservation.getLastName(), tableReservation.getPhone(), tableReservation.getEmail(),
                tableReservation.getNumberOfPeople(), tableReservation.getStartDate(), tableReservation.getTime(),
                tableReservation.getAdditionalRequest(), tableReservation.getPromoCode());

        response.setHeader("Location", builder.path("/api/createtablereservation/"+tableReservation.getId()).
                buildAndExpand(tableReservation.getId()).toUriString());

        return tableReservationService.createNewTableReseravtion(tableReservation1.getFirstName(),
                tableReservation1.getLastName(), tableReservation1.getPhone(), tableReservation1.getEmail(),
                tableReservation1.getNumberOfPeople(), tableReservation1.getStartDate(), tableReservation1.getTime(),
                tableReservation1.getAdditionalRequest(), tableReservation1.getPromoCode());

    }

}
