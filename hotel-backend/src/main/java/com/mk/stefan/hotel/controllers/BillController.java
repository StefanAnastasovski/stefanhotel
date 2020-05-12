package com.mk.stefan.hotel.controllers;

import com.mk.stefan.hotel.model.Bill;
import com.mk.stefan.hotel.services.bill.BillService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class BillController {

    private final BillService billService;

    public BillController(BillService billService) {
        this.billService = billService;
    }

    @GetMapping("/getallbills")
    public List<Bill> getAllBills() {
        return  billService.getAllBills();
    }

    @PostMapping("/createbill")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public Bill createNewBill(@RequestBody Bill bill,
                              HttpServletResponse response,
                              UriComponentsBuilder builder){
        Bill bill1 = new Bill(bill.getBillNumber(),
                bill.getBillDate(), bill.getAmount());
        response.setHeader("Location", builder.path("/api/creatbill/"+bill1.getId()).
                buildAndExpand(bill.getId()).toUriString());

        return billService.createNewBill(bill1.getBillNumber(),
                bill1.getBillDate(), bill1.getAmount());

    }
}
