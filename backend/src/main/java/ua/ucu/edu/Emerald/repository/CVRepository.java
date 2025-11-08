package ua.ucu.edu.Emerald.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ua.ucu.edu.Emerald.entity.CV;

@Repository
public interface CVRepository extends JpaRepository<CV, Long> {

}
