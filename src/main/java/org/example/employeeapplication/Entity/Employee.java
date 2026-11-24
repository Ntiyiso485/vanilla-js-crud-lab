package org.example.employeeapplication.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "employee")
@Getter
@Setter
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id",unique = true)
    private Long id;

    @Column(name = "eame",nullable = false)
    private String name;

    @Column(name = "eurname",nullable = false)
    private String surname;

    @Column(name = "email",nullable = false,unique = true)
    private String email;
}
