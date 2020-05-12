package com.mk.stefan.hotel.controllers;

import com.mk.stefan.hotel.model.Payment;
import com.mk.stefan.hotel.services.payment.PaymentService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @GetMapping
    @RequestMapping("/getallpayments")
    public List<Payment> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @PostMapping("/createpayment")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public Payment createNewPayment(@RequestBody Payment payment,
                                    HttpServletResponse response,
                                    UriComponentsBuilder builder){

        Payment payment1 = new Payment(payment.getFullName(), payment.getCardNumber(),
                payment.getSecurityCode(), payment.getExpirationDateMonth(),
                payment.getExpirationDateYear());

        response.setHeader("Location", builder.path("/api/createpayment/"+payment.getId()).
                buildAndExpand(payment.getId()).toUriString());

        return paymentService.createNewPayment(payment1.getFullName(),
                payment1.getCardNumber(), payment1.getSecurityCode(),
                payment1.getExpirationDateMonth(), payment1.getExpirationDateYear());
    }


}
