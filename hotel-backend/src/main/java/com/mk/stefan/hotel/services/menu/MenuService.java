package com.mk.stefan.hotel.services.menu;

import com.mk.stefan.hotel.model.Menu;

import java.util.List;
import java.util.Optional;

public interface MenuService {

    List<Menu> getAllMenu();

    List<Menu> getAllMenuByTypeOfMeal(String typeOfMeal);

    Optional<Menu> getByMealName(String mealName);

}
