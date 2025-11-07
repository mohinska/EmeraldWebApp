package ua.ucu.edu.Emerald.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "users")
public class User {
    @Setter
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String providerId;
    @Getter
    @Setter
    @Column(name = "firstname")
    private String firstName;
    @Getter
    @Setter
    @Column(name = "lastname")
    private String lastName;
    private String email;
    @Column(name = "phonenumber")
    private String phoneNumber;
}
