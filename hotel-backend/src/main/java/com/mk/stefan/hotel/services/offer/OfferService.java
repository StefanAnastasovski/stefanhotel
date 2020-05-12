package com.mk.stefan.hotel.services.offer;

import com.mk.stefan.hotel.model.Offer;

import java.util.List;
import java.util.Optional;

public interface OfferService {

    List<Offer> getAllOffers();

    Optional<Offer> getOfferByName(String offer);

}
