package com.mk.stefan.hotel.services.account;

import com.mk.stefan.hotel.model.Account;
import com.mk.stefan.hotel.model.SignUp;

import java.util.List;
import java.util.Optional;

public interface AccountService {

    List<Account> getAllAccounts();

    Optional<Account> getByUsername(String username);

    Account createNewAccount(String username, SignUp signUp);

}
