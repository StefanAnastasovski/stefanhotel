package com.mk.stefan.hotel.services.bill;

import com.mk.stefan.hotel.model.Bill;

import java.util.List;

public interface BillService {

    List<Bill> getAllBills();

    Bill createNewBill(String billNumber, String billDate, String amount);

}
