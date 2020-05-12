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
public class AccountTableTableReservationId implements Serializable {

    @Column(name = "account_id")
    private Long accountId;

    @Column(name = "table_id")
    private Long TableId;

    @Column(name = "table_reservation_id")
    private Long TableReservationId;

    public AccountTableTableReservationId() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AccountTableTableReservationId that = (AccountTableTableReservationId) o;

        if (accountId != null ? !accountId.equals(that.accountId) : that.accountId != null) return false;
        if (TableId != null ? !TableId.equals(that.TableId) : that.TableId != null) return false;
        return TableReservationId != null ? TableReservationId.equals(that.TableReservationId) : that.TableReservationId == null;
    }

    @Override
    public int hashCode() {
        int result = accountId != null ? accountId.hashCode() : 0;
        result = 31 * result + (TableId != null ? TableId.hashCode() : 0);
        result = 31 * result + (TableReservationId != null ? TableReservationId.hashCode() : 0);
        return result;
    }
}
