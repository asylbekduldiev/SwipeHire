package com.swipehire.swipehirebackend.controller;

import com.swipehire.swipehirebackend.model.Users;
import com.swipehire.swipehirebackend.repo.UserRepo;
import com.swipehire.swipehirebackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.pulsar.PulsarProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private UserService service;

    @Autowired
    AuthenticationManager authManager;

    private UserRepo repo;

    @PostMapping("/register")
    public Users register(@RequestBody Users user) {
        return service.register(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody Users user) {
        return service.verify(user);
    }
}
