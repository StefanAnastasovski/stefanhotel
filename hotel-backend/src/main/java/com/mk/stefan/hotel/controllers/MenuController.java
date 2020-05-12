package com.mk.stefan.hotel.controllers;

import com.mk.stefan.hotel.model.Menu;
import com.mk.stefan.hotel.services.menu.MenuService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class MenuController {

    private final MenuService menuService;

    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @GetMapping("/getallmenu")
    public List<Menu> getAllMenu() {
        return  menuService.getAllMenu();
    }

    @GetMapping("/getallmenubytypeofmeal/{typeOfMeal}")
    public List<Menu> getAllMenuByTypeOfMeal(@PathVariable String typeOfMeal){
        return menuService.getAllMenuByTypeOfMeal(typeOfMeal);
    }

    @GetMapping("/getmenubymealname/{mealName}")
    public Optional<Menu> getByMealName(@PathVariable String mealName){
        return menuService.getByMealName(mealName);
    }

}
