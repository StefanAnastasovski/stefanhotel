package com.mk.stefan.hotel.model.terneryRelationships;

import com.mk.stefan.hotel.model.embeddedIds.AccountMenuOrderId;
import lombok.AllArgsConstructor;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Entity(name = "order_menu")
@AllArgsConstructor
public class OrderMenu {

    @EmbeddedId
    private AccountMenuOrderId id;

    public OrderMenu() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        OrderMenu orderMenu = (OrderMenu) o;

        return id != null ? id.equals(orderMenu.id) : orderMenu.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
