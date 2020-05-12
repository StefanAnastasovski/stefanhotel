package com.mk.stefan.hotel.services.table;

import com.mk.stefan.hotel.model.Table;

import java.util.List;
import java.util.Optional;

public interface TableService {

    List<Table> getAllTables();

    Optional<Table> getTableByTableNumber(String tableNumber);

}
