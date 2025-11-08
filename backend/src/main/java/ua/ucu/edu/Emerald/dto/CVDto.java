package ua.ucu.edu.Emerald.dto;

import java.util.List;
import lombok.Data;

@Data
public class CVDto {
    private String title;
    private String name;
    private String surname;
    private String email;
    private String description;
    private String linkedIn;
    private String github;
    private String experience;
    private String education;
    private List<String> skills;
}
