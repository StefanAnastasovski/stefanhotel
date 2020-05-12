package com.mk.stefan.hotel.controllers;

import com.mk.stefan.hotel.model.ContactUs;
import com.mk.stefan.hotel.services.contactus.ContactUsService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactUsController {

    private final ContactUsService contactUsService;

    public ContactUsController(ContactUsService contactUsService) {
        this.contactUsService = contactUsService;
    }

    @GetMapping("/getallcontactus")
    public List<ContactUs> getAllInformationFromContactUs() {
        return  contactUsService.getAllInformationFromContactUs();
    }

    @PostMapping("/createcontactus")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public ContactUs createNewContactUs(@RequestBody ContactUs contactUs,
                                        HttpServletResponse response,
                                        UriComponentsBuilder builder){
        ContactUs contactUs1 = new ContactUs(contactUs.getFirstName(),
                contactUs.getLastName(), contactUs.getEmail(),
                contactUs.getComment());
        response.setHeader("Location", builder.path("/api/createcontactus/"+contactUs.getId()).
                buildAndExpand(contactUs.getId()).toUriString());
        return contactUsService.createNewContactUs(contactUs1.getFirstName(),
                contactUs1.getLastName(), contactUs1.getEmail(),
                contactUs1.getComment());
    }

}
