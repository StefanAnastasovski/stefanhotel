package com.mk.stefan.hotel.repositories;

import com.mk.stefan.hotel.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ServiceRepository extends JpaRepository<Service, Long> {
    Optional<Service> getServiceByServiceName(String serviceName);
}
