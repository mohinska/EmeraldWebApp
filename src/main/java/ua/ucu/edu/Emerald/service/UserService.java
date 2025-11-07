package ua.ucu.edu.Emerald.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ua.ucu.edu.Emerald.entity.User;
import ua.ucu.edu.Emerald.repository.UserRepository;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(long id, String providerId, String firstName, String lastName, String email){
        User user = new User(id, providerId, firstName, lastName, email);
        return userRepository.save(user);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void deleteUser(String email) {
        userRepository.deleteByEmail(email);
    }   
    
}

