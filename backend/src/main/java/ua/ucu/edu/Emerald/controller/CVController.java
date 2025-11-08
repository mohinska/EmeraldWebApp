package ua.ucu.edu.Emerald.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.ucu.edu.Emerald.dto.CVDto;
import ua.ucu.edu.Emerald.entity.CV;
import ua.ucu.edu.Emerald.service.CVService;

@RestController
@RequestMapping("/api/cv")
public class CVController {

    private final CVService cvService;

    public CVController(CVService cvService) {
        this.cvService = cvService;
    }

    @PostMapping
    public ResponseEntity<?> saveCv(@RequestBody CVDto cvDto , @RequestParam String email) {
        try {
            CV savedCv = cvService.saveCv(cvDto, email);
            
            return ResponseEntity.status(201).body(savedCv);
            
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Помилка при збереженні CV: " + e.getMessage());
        }
    }
}
