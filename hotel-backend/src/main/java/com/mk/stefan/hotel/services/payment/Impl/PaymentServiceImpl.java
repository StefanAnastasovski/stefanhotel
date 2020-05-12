package com.mk.stefan.hotel.services.payment.Impl;

import com.mk.stefan.hotel.model.Payment;
import com.mk.stefan.hotel.repositories.PaymentRepository;
import com.mk.stefan.hotel.services.payment.PaymentService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;

    public PaymentServiceImpl(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    @Override
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    @Override
    public Payment createNewPayment(String fullName, String cardNumber,
                                    String securityCode, String expirationDateMonth,
                                    String expirationDateYear) {
        Payment payment = new Payment(fullName, cardNumber, securityCode, expirationDateMonth, expirationDateYear);
        return paymentRepository.save(payment);
    }
}
