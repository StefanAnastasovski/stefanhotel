package com.mk.stefan.hotel.controllers;

import com.mk.stefan.hotel.model.Service;
import com.mk.stefan.hotel.services.service.ServiceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ServiceController {

    private final ServiceService serviceService;

    public ServiceController(ServiceService serviceService) {
        this.serviceService = serviceService;
    }

    @GetMapping("/getallservices")
    public List<Service> getAllService() {
        return serviceService.getAllServices();
    }

    @GetMapping("/getservicebyservicename/{serviceName}")
    public Optional<Service> getServiceByServiceName(@PathVariable String serviceName){
        return serviceService.getServiceByServiceName(serviceName);
    }
}
