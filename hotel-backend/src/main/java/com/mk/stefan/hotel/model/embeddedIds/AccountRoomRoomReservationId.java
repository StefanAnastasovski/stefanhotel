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
public class AccountRoomRoomReservationId implements Serializable {

    @Column(name = "account_id")
    private Long accountId;

    @Column(name = "room_id")
    private Long RoomId;

    @Column(name = "room_reservation_id")
    private Long RoomReservationId;

    public AccountRoomRoomReservationId() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AccountRoomRoomReservationId that = (AccountRoomRoomReservationId) o;

        if (accountId != null ? !accountId.equals(that.accountId) : that.accountId != null) return false;
        if (RoomId != null ? !RoomId.equals(that.RoomId) : that.RoomId != null) return false;
        return RoomReservationId != null ? RoomReservationId.equals(that.RoomReservationId) : that.RoomReservationId == null;
    }

    @Override
    public int hashCode() {
        int result = accountId != null ? accountId.hashCode() : 0;
        result = 31 * result + (RoomId != null ? RoomId.hashCode() : 0);
        result = 31 * result + (RoomReservationId != null ? RoomReservationId.hashCode() : 0);
        return result;
    }
}
