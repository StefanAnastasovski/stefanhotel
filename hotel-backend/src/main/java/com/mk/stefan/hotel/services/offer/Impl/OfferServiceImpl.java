package com.mk.stefan.hotel.services.offer.Impl;

import com.mk.stefan.hotel.model.Offer;
import com.mk.stefan.hotel.repositories.OfferRepository;
import com.mk.stefan.hotel.services.offer.OfferService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OfferServiceImpl implements OfferService {

    private final OfferRepository offerRepository;

    public OfferServiceImpl(OfferRepository offerRepository) {
        this.offerRepository = offerRepository;
    }

    @Override
    public List<Offer> getAllOffers() {
        return offerRepository.findAll();
    }

    @Override
    public Optional<Offer> getOfferByName(String offer) {
        return offerRepository.getOfferByOfferName(offer);
    }


}
