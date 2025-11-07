package ua.ucu.edu.Emerald.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import ua.ucu.edu.Emerald.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @Query(value = "SELECT * FROM users WHERE email = :email", nativeQuery = true)
    User findUserByEmail(String email);
    void deleteByEmail(String email);
}
