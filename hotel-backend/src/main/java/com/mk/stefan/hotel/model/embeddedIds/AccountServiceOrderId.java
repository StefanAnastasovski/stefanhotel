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
public class AccountServiceOrderId implements Serializable {

    @Column(name = "account_id")
    private Long accountId;

    @Column(name = "service_id")
    private Long serviceId;

    @Column(name = "order_id")
    private Long orderId;

    public AccountServiceOrderId() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AccountServiceOrderId that = (AccountServiceOrderId) o;

        if (accountId != null ? !accountId.equals(that.accountId) : that.accountId != null) return false;
        if (serviceId != null ? !serviceId.equals(that.serviceId) : that.serviceId != null) return false;
        return orderId != null ? orderId.equals(that.orderId) : that.orderId == null;
    }

    @Override
    public int hashCode() {
        int result = accountId != null ? accountId.hashCode() : 0;
        result = 31 * result + (serviceId != null ? serviceId.hashCode() : 0);
        result = 31 * result + (orderId != null ? orderId.hashCode() : 0);
        return result;
    }

}
