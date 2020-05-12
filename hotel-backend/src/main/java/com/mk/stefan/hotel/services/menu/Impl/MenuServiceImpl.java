package com.mk.stefan.hotel.services.menu.Impl;

import com.mk.stefan.hotel.model.Menu;
import com.mk.stefan.hotel.repositories.MenuRepository;
import com.mk.stefan.hotel.services.menu.MenuService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MenuServiceImpl implements MenuService {

    private final MenuRepository menuRepository;

    public MenuServiceImpl(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    @Override
    public List<Menu> getAllMenu() {
        return menuRepository.findAll();
    }

    @Override
    public List<Menu> getAllMenuByTypeOfMeal(String typeOfMeal) {
        return menuRepository.findByTypeOfMeal(typeOfMeal);
    }

    @Override
    public Optional<Menu> getByMealName(String mealName) {
        return menuRepository.findByMealName(mealName);
    }
}
