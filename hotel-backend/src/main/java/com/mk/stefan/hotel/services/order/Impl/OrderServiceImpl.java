package com.mk.stefan.hotel.services.order.Impl;


import com.mk.stefan.hotel.model.Order;
import com.mk.stefan.hotel.repositories.OrderRepository;
import com.mk.stefan.hotel.services.order.OrderService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order crateNewOrder(String firstName, String lastName, String roomNumber,
                               String billNumber, String orderDate, String time,
                               String additionalRequest) {

        Order order = new Order(firstName, lastName, roomNumber, billNumber, orderDate, time, additionalRequest);
        return orderRepository.save(order);
    }

}
