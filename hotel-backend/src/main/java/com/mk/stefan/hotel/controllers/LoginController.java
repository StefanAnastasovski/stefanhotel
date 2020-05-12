package com.mk.stefan.hotel.controllers;

import com.mk.stefan.hotel.model.Login;
import com.mk.stefan.hotel.services.login.LoginService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping("/getalllogins")
    public List<Login> getAllLogins() {
        return loginService.getAllLogins();
    }

    @GetMapping("/getusername/{username}")
    public Optional<Login> getUsername(@PathVariable String username) {

        Optional<Login> login = this.loginService.getUsername(username);
        System.out.println("----------" + login + "-----------");
        return login;
    }

    @PostMapping("/createlogin")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public Login createNewLogin(@RequestBody Login login,
                                HttpServletResponse response,
                                UriComponentsBuilder builder) {
        Login login1 = new Login(login.getUsername(), login.getLoginDate());

        response.setHeader("Location", builder.path("/api/createlogin/" + login.getId()).
                buildAndExpand(login.getId()).toUriString());
        //
        return loginService.createNewLogin(login1.getUsername(), login1.getLoginDate());

    }
}
