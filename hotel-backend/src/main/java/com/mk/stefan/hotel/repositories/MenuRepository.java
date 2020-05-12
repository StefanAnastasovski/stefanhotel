package com.mk.stefan.hotel.repositories;

import com.mk.stefan.hotel.model.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MenuRepository extends JpaRepository<Menu, Long> {

    List<Menu> findByTypeOfMeal(String typeOfMeal);
    Optional<Menu> findByMealName(String mealName);

}
