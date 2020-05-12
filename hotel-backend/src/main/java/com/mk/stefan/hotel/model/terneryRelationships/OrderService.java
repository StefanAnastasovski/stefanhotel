package com.mk.stefan.hotel.model.terneryRelationships;

import com.mk.stefan.hotel.model.embeddedIds.AccountServiceOrderId;
import lombok.AllArgsConstructor;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Entity(name = "order_service")
@AllArgsConstructor
public class OrderService {

    @EmbeddedId
    private AccountServiceOrderId id;

    public OrderService() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        OrderService that = (OrderService) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
