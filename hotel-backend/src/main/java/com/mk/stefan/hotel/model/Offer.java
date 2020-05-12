package com.mk.stefan.hotel.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String offerName;

    private String description;

    private String price;

    @ManyToMany(mappedBy = "offers")
    private Set<Account> account;

    public Offer() {
    }

    public Offer(String offerName, String description, String price) {
        this.offerName = offerName;
        this.description = description;
        this.price = price;
    }

    @Override
    public String toString() {
        return "Offer{" +
                "offerName='" + offerName + '\'' +
                ", description='" + description + '\'' +
                ", price='" + price + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Offer offer = (Offer) o;

        return id != null ? id.equals(offer.id) : offer.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}
