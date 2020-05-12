package com.mk.stefan.hotel.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String username;

    @OneToOne(cascade = CascadeType.ALL)
    private SignUp signUp;

    @OneToOne(mappedBy = "account")
    private Login login;

    @OneToOne(mappedBy = "account")
    private Payment payment;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "account")
    private Set<Bill> bills;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "account")
    private Set<ContactUs> contactUses;

    @ManyToMany
    @JoinTable(name = "account_offer",
            joinColumns = @JoinColumn(name = "account_id"),
            inverseJoinColumns = @JoinColumn(name = "offer_id"))
    private Set<Offer> offers;

    public Account() {
    }

    public Account(String username) {
        this.username = username;
    }
    @Override
    public String toString() {
        return "Account{" +
                ", username='" + username + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Account account = (Account) o;

        return id != null ? id.equals(account.id) : account.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}
