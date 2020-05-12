package com.mk.stefan.hotel.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class ContactUs {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    private String email;

    private String comment;

    @ManyToOne
    private Account account;

    public ContactUs() {
    }

    public ContactUs(String firstName, String lastName, String email, String comment) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.comment = comment;
    }

    @Override
    public String toString() {
        return "ContactUs{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", comment='" + comment + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ContactUs contactUs = (ContactUs) o;

        return id != null ? id.equals(contactUs.id) : contactUs.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}
