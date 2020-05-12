package com.mk.stefan.hotel.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "orders")
@Getter
@Setter
@AllArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "room_number")
    private String roomNumber;

    @Column(name = "bill_number")
    private String billNumber;

    @Column(name = "order_date")
    private String orderDate;

    @Column(name = "order_time")
    private String time;

    @Column(name = "additional_request")
    private String additionalRequest;

    public Order() {
    }

    public Order(String firstName, String lastName,
                 String roomNumber, String billNumber,
                 String startDate, String time,
                 String additionalRequest) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.roomNumber = roomNumber;
        this.billNumber = billNumber;
        this.orderDate = startDate;
        this.time = time;
        this.additionalRequest = additionalRequest;
    }

    @Override
    public String toString() {
        return "Order{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", roomNumber='" + roomNumber + '\'' +
                ", billNumber='" + billNumber + '\'' +
                ", orderDate='" + orderDate + '\'' +
                ", time='" + time + '\'' +
                ", additionalRequest='" + additionalRequest + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Order order = (Order) o;

        return id != null ? id.equals(order.id) : order.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}
