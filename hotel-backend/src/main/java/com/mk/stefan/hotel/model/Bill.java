package com.mk.stefan.hotel.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class Bill {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "bill_number")
    private String billNumber;

    @Column(name = "bill_date")
    private String billDate;

    private String amount;

    @ManyToOne
    private Account account;

    public Bill() {
    }

    public Bill(String billNumber, String billDate, String amount) {
        this.billNumber = billNumber;
        this.billDate = billDate;
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "Bill{" +
                "billNumber='" + billNumber + '\'' +
                ", billDate='" + billDate + '\'' +
                ", amount='" + amount + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Bill bill = (Bill) o;

        return id != null ? id.equals(bill.id) : bill.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}
