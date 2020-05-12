package com.mk.stefan.hotel.model.terneryRelationships;


import com.mk.stefan.hotel.model.embeddedIds.AccountTableTableReservationId;
import lombok.AllArgsConstructor;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Entity(name = "reserve_table")
@AllArgsConstructor
public class ReserveTable {

    @EmbeddedId
    private AccountTableTableReservationId id;

    public ReserveTable() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ReserveTable that = (ReserveTable) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
