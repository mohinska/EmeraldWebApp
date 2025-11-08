package ua.ucu.edu.Emerald.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import ua.ucu.edu.Emerald.entity.User;
import ua.ucu.edu.Emerald.repository.UserRepository;
import ua.ucu.edu.Emerald.service.UserService;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public Optional<User> findByEmail(String email) {
        return userService.findByEmail(email);
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user){
        return userService.createUser(user.getId(), user.getProviderId(), user.getFirstName(), user.getLastName(), user.getEmail());
    }

    @DeleteMapping("/users")
    public void deleteUser(@PathVariable String email) {
        userService.deleteUser(email);
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(@AuthenticationPrincipal OAuth2User principal) {
        if (principal == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String email = principal.getAttribute("email");

        Optional<User> userOptional = userService.findByEmail(email);

        if (userOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("User not found in local database.");
        }

        User appUser = userOptional.get();

        Map<String, Object> userDetails = new HashMap<>();
        userDetails.put("id", appUser.getId());
        userDetails.put("first_name", appUser.getFirstName());
        userDetails.put("last_name", appUser.getLastName());
        userDetails.put("email", appUser.getEmail());

        return ResponseEntity.ok(userDetails);
    }
}
