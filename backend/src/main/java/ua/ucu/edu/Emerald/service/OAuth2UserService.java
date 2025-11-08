package ua.ucu.edu.Emerald.service;

import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.ucu.edu.Emerald.entity.User;
import ua.ucu.edu.Emerald.repository.UserRepository;

import java.util.Optional;

@Service
public class OAuth2UserService extends DefaultOAuth2UserService {
    private final UserRepository userRepository;

    public OAuth2UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        String email = oAuth2User.getAttribute("email");
        String firstName = oAuth2User.getAttribute("given_name");
        String lastName = oAuth2User.getAttribute("family_name");
        String providerId = oAuth2User.getName();

        processUserLogin(email, firstName, lastName, providerId);

        return oAuth2User;
    }

    private User processUserLogin(String email, String firstName, String lastName, String providerId) {
        Optional<User> userOptional = userRepository.findByEmail(email);

        if (userOptional.isPresent()) {
            User existingUser = userOptional.get();
            existingUser.setLastName(lastName);
            existingUser.setFirstName(firstName);
            return userRepository.save(existingUser);
        } else {
            User newUser = new User();
            newUser.setEmail(email);
            newUser.setFirstName(firstName);
            newUser.setLastName(lastName);
            newUser.setProviderId(providerId);
            return userRepository.save(newUser);
        }
    }
}
