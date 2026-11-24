package org.example.employeeapplication.EmployeeRepository;

import org.example.employeeapplication.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
