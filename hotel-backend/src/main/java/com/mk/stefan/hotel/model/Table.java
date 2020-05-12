package com.mk.stefan.hotel.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "tables")
@Getter
@Setter
@AllArgsConstructor
public class Table {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "table_number")
    private String tableNumber;

    @Column(name = "number_of_seats")
    private String numberOfSeats;

    public Table() {
    }

    public Table(String tableNumber, String numberOfSeats) {
        this.tableNumber = tableNumber;
        this.numberOfSeats = numberOfSeats;
    }

    @Override
    public String toString() {
        return "Table{" +
                "tableNumber='" + tableNumber + '\'' +
                ", numberOfSeats='" + numberOfSeats + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Table table = (Table) o;

        return id != null ? id.equals(table.id) : table.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}

