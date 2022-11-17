package com.example.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;
    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    public void addNewStudent(Student student) {
        Optional<Student> studentOptional = studentRepository.findStudentByEmail(student.getEmail());
        if (studentOptional.isPresent()) {
            throw new IllegalStateException("Email Exists");
        }
        studentRepository.save(student);
    }

    public void deleteStudent(Long studentId) {
        boolean studentExists = studentRepository.existsById(studentId);
        if(!studentExists) {
            throw new IllegalStateException("student with id " + studentId + " does not exist");
        }
        studentRepository.deleteById(studentId);
    }

    @Transactional
    public void updateStudent(
            Long studentId,
            Student student
    ) {
        Student targetStudent = studentRepository
                .findById(studentId)
                .orElseThrow(()-> new IllegalStateException("student with id " + studentId + " does not exist"));

        if(student.getName() != null && student.getName().length() > 0 && !Objects.equals(targetStudent.getName(), student.getName())) {
            targetStudent.setName(student.getName());
        }

        if(student.getEmail() != null && student.getEmail().length() > 0 && !Objects.equals(targetStudent.getEmail(), student.getEmail())) {
            Optional<Student> studentOptional = studentRepository.findStudentByEmail(student.getEmail());
            if(studentOptional.isPresent()) {
                throw new IllegalStateException("Email is Taken");
            }
            targetStudent.setEmail(student.getEmail());
        }
    }
}
