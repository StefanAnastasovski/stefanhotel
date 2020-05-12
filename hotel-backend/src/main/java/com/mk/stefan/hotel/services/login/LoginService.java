package com.mk.stefan.hotel.services.login;

import com.mk.stefan.hotel.model.Login;

import java.util.List;
import java.util.Optional;

public interface LoginService {

    List<Login> getAllLogins();

    Optional<Login> getUsername(String username);

    Login createNewLogin(String username, String loginDate);

}
