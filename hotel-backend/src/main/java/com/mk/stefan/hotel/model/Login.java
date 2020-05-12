package com.mk.stefan.hotel.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
public class Login {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String username;

    @Column(name="login_date")
    private String loginDate;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL)
    private Account account;

    public Login() {
    }

    public Login(String username, String loginDate) {
        this.username = username;
        this.loginDate = loginDate;
    }

    @Override
    public String toString() {
        return "Login{" +
                "username='" + username + '\'' +
                ", loginDate='" + loginDate + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Login login = (Login) o;

        return id != null ? id.equals(login.id) : login.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
