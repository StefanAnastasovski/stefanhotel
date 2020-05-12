package com.mk.stefan.hotel.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "card_number")
    private String cardNumber;

    @Column(name = "security_code")
    private String securityCode;

    @Column(name = "expiration_date_month")
    private String expirationDateMonth;

    @Column(name = "expiration_date_year")
    private String expirationDateYear;

    @OneToOne(cascade = CascadeType.ALL)
    private Account account;

    public Payment() {
    }

    public Payment(String fullName, String cardNumber, String securityCode, String expirationDateMonth, String expirationDateYear) {
        this.fullName = fullName;
        this.cardNumber = cardNumber;
        this.securityCode = securityCode;
        this.expirationDateMonth = expirationDateMonth;
        this.expirationDateYear = expirationDateYear;
    }

    @Override
    public String toString() {
        return "Payment{" +
                "fullName='" + fullName + '\'' +
                ", cardNumber='" + cardNumber + '\'' +
                ", securityCode='" + securityCode + '\'' +
                ", expirationDateMonth='" + expirationDateMonth + '\'' +
                ", expirationDateYear='" + expirationDateYear + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Payment payment = (Payment) o;

        return id != null ? id.equals(payment.id) : payment.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}
