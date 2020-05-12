package com.mk.stefan.hotel.services.signup;

import com.mk.stefan.hotel.model.SignUp;

import java.util.List;
import java.util.Optional;

public interface SignUpService {

    List<SignUp> getAllSignUps();

    Optional<SignUp> getSignUpByUsername(String username);

    SignUp createNewSignUp(String firstName, String lastName,
                           String username, String password,
                           String email, String gender,
                           String birthday, String signUpDate);

}
