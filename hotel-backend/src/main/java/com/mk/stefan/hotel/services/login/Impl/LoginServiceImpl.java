package com.mk.stefan.hotel.services.login.Impl;

import com.mk.stefan.hotel.model.Login;
import com.mk.stefan.hotel.repositories.LoginRepository;
import com.mk.stefan.hotel.services.login.LoginService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoginServiceImpl implements LoginService {

    private final LoginRepository loginRepository;

    public LoginServiceImpl(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    @Override
    public List<Login> getAllLogins() {

        return loginRepository.findAll();
    }

    @Override
    public Optional<Login> getUsername(String username) {
        return loginRepository.findByUsername(username);
    }

    @Override
    public Login createNewLogin(String username, String loginDate) {
        Login login = new Login(username, loginDate);
        return loginRepository.save(login);
    }
}
