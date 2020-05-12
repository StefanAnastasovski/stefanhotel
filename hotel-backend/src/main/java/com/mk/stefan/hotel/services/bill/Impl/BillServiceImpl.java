package com.mk.stefan.hotel.services.bill.Impl;

import com.mk.stefan.hotel.model.Bill;
import com.mk.stefan.hotel.repositories.BillRepository;
import com.mk.stefan.hotel.services.bill.BillService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillServiceImpl implements BillService {

    private final BillRepository billRepository;

    public BillServiceImpl(BillRepository billRepository) {
        this.billRepository = billRepository;
    }

    @Override
    public List<Bill> getAllBills() {
        return billRepository.findAll();
    }

    @Override
    public Bill createNewBill(String billNumber, String billDate, String amount) {
        Bill bill = new Bill(billNumber, billDate, amount);
        return this.billRepository.save(bill);
    }
}
