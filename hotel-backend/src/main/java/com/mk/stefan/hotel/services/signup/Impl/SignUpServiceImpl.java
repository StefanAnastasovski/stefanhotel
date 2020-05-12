package com.mk.stefan.hotel.services.signup.Impl;

import com.mk.stefan.hotel.model.SignUp;
import com.mk.stefan.hotel.repositories.AccountRepository;
import com.mk.stefan.hotel.repositories.SignUpRepository;
import com.mk.stefan.hotel.services.signup.SignUpService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SignUpServiceImpl implements SignUpService {

    private final SignUpRepository signUpRepository;
    private final AccountRepository accountRepository;

    public SignUpServiceImpl(SignUpRepository signUpRepository, AccountRepository accountRepository) {
        this.signUpRepository = signUpRepository;
        this.accountRepository = accountRepository;
    }

    @Override
    public List<SignUp> getAllSignUps() {

        return signUpRepository.findAll();
    }

    @Override
    public Optional<SignUp> getSignUpByUsername(String username) {
        return signUpRepository.getSignUpByUsername(username);
    }

    @Override
    public SignUp createNewSignUp(String firstName, String lastName,
                                  String username, String password,
                                  String email, String gender,
                                  String birthday, String signUpDate) {

        SignUp signUp = new SignUp(firstName, lastName, username, password, email, gender, birthday, signUpDate);

        return signUpRepository.save(signUp);

    }
}
