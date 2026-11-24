package org.example.employeeapplication.Service;

import org.example.employeeapplication.EmployeeRepository.EmployeeRepository;
import org.example.employeeapplication.Entity.Employee;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class EmployeeService {

   private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee saveEmployee(Employee employee){
        return employeeRepository.save(employee);
    }
    public Employee updateEmployee(Long id,Employee updatedEmployee){

        Employee existingEmp=employeeRepository.findById(id).orElseThrow(()->
                new RuntimeException("Employee not found"));
        existingEmp.setName(updatedEmployee.getName());
        existingEmp.setSurname(updatedEmployee.getSurname());
        existingEmp.setEmail(updatedEmployee.getEmail());

        return employeeRepository.save(existingEmp);
    }
    public Employee getEmployeeById(Long id){
        return employeeRepository.findById(id).orElseThrow(()->new RuntimeException("Employee not found"));
    }
    public void deleteEmployee(Long id) {

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        employeeRepository.delete(employee);
    }
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

}
