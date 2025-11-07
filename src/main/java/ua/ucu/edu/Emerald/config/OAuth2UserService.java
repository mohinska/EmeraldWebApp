package ua.ucu.edu.Emerald.config;

import org.springframework.beans.factory.annotation.Autowired;
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
        String firstName = oAuth2User.getAttribute("firstname");
        String lastName = oAuth2User.getAttribute("lastname");
        String providerId = oAuth2User.getName();

        processUserLogin(email, firstName, lastName, providerId);

        return oAuth2User;
    }

    private User processUserLogin(String email, String firstName, String lastName, String providerId) {
        Optional<User> userOptional = userRepository.findByEmail(email);

        if (userOptional.isPresent()) {
            // User exists, update their name if it's different
            User existingUser = userOptional.get();
            if (!existingUser.getName().equals(name)) {
                existingUser.setName(name);
                return userRepository.save(existingUser);
            }
            return existingUser;
        } else {
            // User does not exist, create a new one
            User newUser = new User();
            newUser.setEmail(email);
            newUser.setName(name);
            newUser.setProviderId(providerId);
            // 'createdAt' is set by default in the entity
            return userRepository.save(newUser);
        }
    }
}
