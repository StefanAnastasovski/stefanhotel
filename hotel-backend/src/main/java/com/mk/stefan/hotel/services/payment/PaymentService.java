package com.mk.stefan.hotel.services.payment;

import com.mk.stefan.hotel.model.Payment;

import java.util.List;

public interface PaymentService {

    List<Payment> getAllPayments();

    Payment createNewPayment(String fullName, String cardNumber,
                             String securityCode, String expirationDateMonth,
                             String expirationDateYear);

}
