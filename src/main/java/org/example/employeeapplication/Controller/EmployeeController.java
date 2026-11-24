package org.example.employeeapplication.Controller;

import org.example.employeeapplication.Entity.Employee;
import org.example.employeeapplication.Service.EmployeeService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/Employee")
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }
    @PostMapping
    public Employee saveEmployee(@RequestBody Employee employee){
        return employeeService.saveEmployee(employee);
    }
    @PutMapping("/{id}")
    public  Employee updateEmployee(@PathVariable Long id,@RequestBody Employee employee){
       return employeeService.updateEmployee(id,employee);

    }
    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        return employeeService.getEmployeeById(id);
    }

}
