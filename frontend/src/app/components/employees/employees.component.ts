import { Component, OnInit } from "@angular/core";

import { EmployeeService } from "../../services/employee.service";
import { NgForm } from "@angular/forms";
import { Employee } from "../../models/employee";

@Component({
  selector: "app-employee",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"],
  providers: [EmployeeService],
})
export class EmployeeComponent implements OnInit {
  //constructor() {};

  constructor(public employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployee();
  }

  addEmployee(form?: NgForm) {

    if (form.value.id || form.value._id) {
      //console.log(" if",form.value);

      this.employeeService.putEmployee(form.value).subscribe((_res) => {
        this.resetForm(form);
        this.getEmployee();
      });
    } else {
      //console.log(" else",form.value);

      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.getEmployee();
        this.resetForm(form);
      });
    }
  }

  getEmployee() {
    //console.log("asdfasdf");
    this.employeeService.getEmployees().subscribe((res) => {
     
      this.employeeService.employees = res;
    });
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.getEmployee();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }
}