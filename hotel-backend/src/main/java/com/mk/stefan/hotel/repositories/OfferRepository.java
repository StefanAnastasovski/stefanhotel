package com.mk.stefan.hotel.repositories;

import com.mk.stefan.hotel.model.Offer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OfferRepository extends JpaRepository<Offer, Long> {

    Optional<Offer> getOfferByOfferName(String offerName);

}
