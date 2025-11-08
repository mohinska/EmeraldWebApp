package ua.ucu.edu.Emerald.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import ua.ucu.edu.Emerald.dto.CVDto;
import ua.ucu.edu.Emerald.entity.CV;
import ua.ucu.edu.Emerald.entity.User;
import ua.ucu.edu.Emerald.repository.CVRepository;
import ua.ucu.edu.Emerald.repository.UserRepository;
import ua.ucu.edu.Emerald.repository.CVRepository;

@Service
public class CVService {

    private final CVRepository cvRepository;
    private final ObjectMapper objectMapper;
    private final UserRepository userRepository;

    public CVService(CVRepository cvRepository, UserRepository userRepository, ObjectMapper objectMapper) {
        this.cvRepository = cvRepository;
        this.userRepository = userRepository;
        this.objectMapper = objectMapper;
    }

    public CV saveCv(CVDto cvDto, String email) throws Exception {
        User currentUser = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        CV cv = new CV();
        cv.setUser(currentUser);

        cv.setTitle(cvDto.getTitle());
        cv.setName(cvDto.getName());
        cv.setSurname(cvDto.getSurname());
        cv.setEmail(cvDto.getEmail());
        cv.setDescription(cvDto.getDescription());
        cv.setLinkedIn(cvDto.getLinkedIn());
        cv.setGithub(cvDto.getGithub());
        
        // try {
        //     cv.setSkillsJson(objectMapper.writeValueAsString(cvDto.getSkills()));
        //     cv.setExperiencesJson(objectMapper.writeValueAsString(cvDto.getExperiences()));
        //     cv.setEducationsJson(objectMapper.writeValueAsString(cvDto.getEducations()));
        // } catch (com.fasterxml.jackson.core.JsonProcessingException e) {
        //     throw new RuntimeException("Error serializing CV data to JSON", e);
        // }

        return cvRepository.save(cv);
    }
}
