package com.mk.stefan.hotel.services.order;

import com.mk.stefan.hotel.model.Order;

import java.util.List;

public interface OrderService {

    List<Order> getAllOrders();

    Order crateNewOrder(String firstName, String lastName,
                        String roomNumber, String billNumber,
                        String orderDate, String time,
                        String additionalRequest);

}
