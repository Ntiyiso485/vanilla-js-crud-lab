package org.example.employeeapplication.Service;

import org.example.employeeapplication.EmployeeRepository.EmployeeRepository;
import org.example.employeeapplication.Entity.Employee;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

   private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee saveEmployee(Employee employee){
        return employeeRepository.save(employee);
    }
}
