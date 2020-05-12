package com.mk.stefan.hotel.services.table.Impl;

import com.mk.stefan.hotel.model.Table;
import com.mk.stefan.hotel.repositories.TableRepository;
import com.mk.stefan.hotel.services.table.TableService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TableServiceImpl implements TableService {

    private final TableRepository tableRepository;

    public TableServiceImpl(TableRepository tableRepository) {
        this.tableRepository = tableRepository;
    }

    @Override
    public List<Table> getAllTables() {
        return tableRepository.findAll();
    }

    @Override
    public Optional<Table> getTableByTableNumber(String tableNumber) {
        return tableRepository.getTableByTableNumber(tableNumber);
    }

}
