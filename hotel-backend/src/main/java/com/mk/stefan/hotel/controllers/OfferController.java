package com.mk.stefan.hotel.controllers;

import com.mk.stefan.hotel.model.Offer;
import com.mk.stefan.hotel.services.offer.OfferService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class OfferController {

    private final OfferService offerService;

    public OfferController(OfferService offerService) {
        this.offerService = offerService;
    }

    @GetMapping("/getalloffers")
    public List<Offer> getAllOffers() {
        return  offerService.getAllOffers();
    }

    @GetMapping("/getofferbyname/{offerName}")
    public Optional<Offer> getOfferByName(@PathVariable String offerName){
        return offerService.getOfferByName(offerName);
    }
}
