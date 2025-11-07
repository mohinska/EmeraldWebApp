package ua.ucu.edu.Emerald.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ua.ucu.edu.Emerald.entity.User;
import ua.ucu.edu.Emerald.repository.UserRepository;

@Service
public class UserService {
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(long id, String providedId, String firstName, String lastName, String email, String phoneNumber){
        User user = new User(id, providedId, firstName, lastName, email, phoneNumber);
        return userRepository.save(user);
    }

    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    
    }

    public void deleteUser(String email) {
        userRepository.deleteByEmail(email);
    }   
    
}

