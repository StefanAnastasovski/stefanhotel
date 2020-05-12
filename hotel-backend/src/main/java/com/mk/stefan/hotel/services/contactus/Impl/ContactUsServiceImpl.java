package com.mk.stefan.hotel.services.contactus.Impl;

import com.mk.stefan.hotel.model.ContactUs;
import com.mk.stefan.hotel.repositories.ContactUsRepository;
import com.mk.stefan.hotel.services.contactus.ContactUsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactUsServiceImpl implements ContactUsService {

    private final ContactUsRepository contactUsRepository;

    public ContactUsServiceImpl(ContactUsRepository contactUsRepository) {
        this.contactUsRepository = contactUsRepository;
    }

    @Override
    public List<ContactUs> getAllInformationFromContactUs() {
        return contactUsRepository.findAll();
    }

    @Override
    public ContactUs createNewContactUs(String firstName, String lastName, String email, String comment) {
        ContactUs contactUs = new ContactUs(firstName, lastName, email, comment);
        return this.contactUsRepository.save(contactUs);
    }
}
