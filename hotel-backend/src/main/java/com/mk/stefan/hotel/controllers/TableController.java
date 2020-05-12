package com.mk.stefan.hotel.controllers;

import com.mk.stefan.hotel.model.Table;
import com.mk.stefan.hotel.services.table.TableService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class TableController {

    private final TableService tableService;

    public TableController(TableService tableService) {
        this.tableService = tableService;
    }


    @GetMapping("/getalltables")
    public List<Table> getAllTables() {
        return tableService.getAllTables();
    }

    @GetMapping("/gettablebytablenumber/{tableNumber}")
    public Optional<Table> getTableByTableNumber(@PathVariable String tableNumber) {
        return tableService.getTableByTableNumber(tableNumber);
    }
}