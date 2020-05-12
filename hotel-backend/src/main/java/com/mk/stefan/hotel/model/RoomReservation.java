package com.mk.stefan.hotel.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class RoomReservation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    private String phone;

    private String email;

    @Column(name = "number_of_rooms")
    private String numberOfRooms;

    @Column(name = "number_of_guests")
    private String numberOfGuests;

    @Column(name = "start_date")
    private String startDate;

    @Column(name = "end_date")
    private String endDate;

    @Column(name = "additional_request")
    private String additionalRequest;

    @Column(name = "promocode")
    private String promoCode;

    public RoomReservation() {
    }

    public RoomReservation(String firstName, String lastName,
                           String phone, String email,
                           String numberOfRooms, String numberOfGuests,
                           String startDate, String endDate,
                           String additionalRequest, String promoCode) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.numberOfRooms = numberOfRooms;
        this.numberOfGuests = numberOfGuests;
        this.startDate = startDate;
        this.endDate = endDate;
        this.additionalRequest = additionalRequest;
        this.promoCode = promoCode;
    }

    @Override
    public String toString() {
        return "RoomReservation{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", numberOfRooms='" + numberOfRooms + '\'' +
                ", numberOfGuests='" + numberOfGuests + '\'' +
                ", startDate='" + startDate + '\'' +
                ", endDate='" + endDate + '\'' +
                ", additionalRequest='" + additionalRequest + '\'' +
                ", promoCode='" + promoCode + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        RoomReservation that = (RoomReservation) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}
