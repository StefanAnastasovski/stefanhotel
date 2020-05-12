package com.mk.stefan.hotel.controllers;

import com.mk.stefan.hotel.model.Order;
import com.mk.stefan.hotel.services.order.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/getallorders")
    public List<Order> getAllOrders() {
        return  orderService.getAllOrders();
    }

    @PostMapping("/createorder")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public Order createNewOrder(@RequestBody Order order,
                                HttpServletResponse response,
                                UriComponentsBuilder builder){
        Order order1 = new Order(order.getFirstName(), order.getLastName(),
                order.getRoomNumber(), order.getBillNumber(), order.getOrderDate(),
        order.getTime(), order.getAdditionalRequest());
        response.setHeader("Location", builder.path("/api/crateorder/"+order1.getId()).
                buildAndExpand(order1.getId()).toUriString());

        return orderService.crateNewOrder(order.getFirstName(), order.getLastName(),
                order.getRoomNumber(), order.getBillNumber(), order.getOrderDate(),
                order.getTime(), order1.getAdditionalRequest());

    }

}
