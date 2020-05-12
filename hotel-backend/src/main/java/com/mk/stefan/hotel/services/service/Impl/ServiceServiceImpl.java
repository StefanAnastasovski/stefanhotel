package com.mk.stefan.hotel.services.service.Impl;

import com.mk.stefan.hotel.model.Service;
import com.mk.stefan.hotel.repositories.ServiceRepository;
import com.mk.stefan.hotel.services.service.ServiceService;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class ServiceServiceImpl implements ServiceService {

    private final ServiceRepository serviceRepository;

    public ServiceServiceImpl(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    @Override
    public List<Service> getAllServices() {
        return serviceRepository.findAll();
    }

    @Override
    public Optional<Service> getServiceByServiceName(String serviceName) {

        return serviceRepository.getServiceByServiceName(serviceName);
    }
}
