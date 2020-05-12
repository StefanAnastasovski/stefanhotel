package com.mk.stefan.hotel.services.contactus;


import com.mk.stefan.hotel.model.ContactUs;

import java.util.List;

public interface ContactUsService {

    List<ContactUs> getAllInformationFromContactUs();

    ContactUs createNewContactUs(String firstName, String lastName,
                                 String email, String comment);

}
