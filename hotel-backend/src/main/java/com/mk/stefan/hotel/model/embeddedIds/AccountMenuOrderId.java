package com.mk.stefan.hotel.model.embeddedIds;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Getter
@Setter
@Embeddable
@AllArgsConstructor
public class AccountMenuOrderId implements Serializable {


    @Column(name = "account_id")
    private Long accountId;

    @Column(name = "menu_id")
    private Long menuId;

    @Column(name = "order_id")
    private Long orderId;

    public AccountMenuOrderId() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AccountMenuOrderId that = (AccountMenuOrderId) o;

        if (accountId != null ? !accountId.equals(that.accountId) : that.accountId != null) return false;
        if (menuId != null ? !menuId.equals(that.menuId) : that.menuId != null) return false;
        return orderId != null ? orderId.equals(that.orderId) : that.orderId == null;
    }

    @Override
    public int hashCode() {
        int result = accountId != null ? accountId.hashCode() : 0;
        result = 31 * result + (menuId != null ? menuId.hashCode() : 0);
        result = 31 * result + (orderId != null ? orderId.hashCode() : 0);
        return result;
    }
}
