package ua.ucu.edu.Emerald.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ua.ucu.edu.Emerald.entity.User;
import ua.ucu.edu.Emerald.service.UserService;

@RestController
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public User findUserByEmail(String email) {
        return userService.findUserByEmail(email);
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user){
        return userService.createUser(user.getId(), user.getProvidedId(), user.getFirstName(), user.getLastName(), user.getEmail(), user.getPhoneNumber());
    }

    @DeleteMapping("/users")
    public void deleteUser(@PathVariable String email) {
        userService.deleteUser(email);
    }
}
