package com.mk.stefan.hotel.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "type_of_meal")
    private String typeOfMeal;

    @Column(name = "meal_name")
    private String mealName;

    private String price;

    public Menu() {
    }

    public Menu(String typeOfMeal, String mealName, String price) {
        this.typeOfMeal = typeOfMeal;
        this.mealName = mealName;
        this.price = price;
    }

    @Override
    public String toString() {
        return "Menu{" +
                "typeOfMeal='" + typeOfMeal + '\'' +
                ", mealName='" + mealName + '\'' +
                ", price='" + price + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Menu menu = (Menu) o;

        return id != null ? id.equals(menu.id) : menu.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }

}
