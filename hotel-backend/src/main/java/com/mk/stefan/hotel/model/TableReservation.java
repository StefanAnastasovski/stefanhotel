package com.mk.stefan.hotel.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class TableReservation {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    private String phone;

    private String email;

    @Column(name = "number_of_people")
    private String numberOfPeople;

    @Column(name = "reservation_date")
    private String startDate;

    @Column(name = "reservation_time")
    private String time;

    @Column(name = "additional_request")
    private String additionalRequest;

    @Column(name = "promocode")
    private String promoCode;

    public TableReservation() {
    }

    public TableReservation(String firstName, String lastName,
                            String phone, String email,
                            String numberOfPeople, String startDate,
                            String time, String additionalRequest,
                            String promoCode) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.numberOfPeople = numberOfPeople;
        this.startDate = startDate;
        this.time = time;
        this.additionalRequest = additionalRequest;
        this.promoCode = promoCode;
    }

    @Override
    public String toString() {
        return "TableReservation{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", numberOfPeople='" + numberOfPeople + '\'' +
                ", startDate='" + startDate + '\'' +
                ", time='" + time + '\'' +
                ", additionalRequest='" + additionalRequest + '\'' +
                ", promoCode='" + promoCode + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        TableReservation that = (TableReservation) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}
