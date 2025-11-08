package ua.ucu.edu.Emerald.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "cv")
@Data
public class CV {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String title;
    private String name;
    private String surname;
    private String email;
    @Column(columnDefinition = "TEXT")
    private String description;
    @Column(name = "linkedin")
    private String linkedIn;
    private String github;

    // @Column(columnDefinition = "TEXT") 
    // private String skillsJson;

    // @Column(columnDefinition = "TEXT")
    // private String experiencesJson;

    // @Column(columnDefinition = "TEXT")
    // private String educationsJson;


}
