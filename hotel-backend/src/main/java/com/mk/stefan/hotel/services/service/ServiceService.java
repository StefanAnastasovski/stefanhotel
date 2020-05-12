package com.mk.stefan.hotel.services.service;

import com.mk.stefan.hotel.model.Service;

import java.util.List;
import java.util.Optional;

public interface ServiceService {

    List<Service> getAllServices();

    Optional<Service> getServiceByServiceName(String serviceName);
}
