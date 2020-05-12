package com.mk.stefan.hotel.model.terneryRelationships;

import com.mk.stefan.hotel.model.embeddedIds.AccountRoomRoomReservationId;
import lombok.AllArgsConstructor;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

@Entity(name = "reserve_room")
@AllArgsConstructor
public class ReserveRoom {

    @EmbeddedId
    private AccountRoomRoomReservationId id;

    public ReserveRoom() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ReserveRoom that = (ReserveRoom) o;

        return id != null ? id.equals(that.id) : that.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}

