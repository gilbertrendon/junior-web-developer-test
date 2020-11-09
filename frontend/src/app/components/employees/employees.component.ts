import { Component, OnInit } from "@angular/core";

import { EmployeeService } from "../../services/employee.service";
import { NgForm } from "@angular/forms";
import { Employee } from "../../models/employee";
import { Contract } from "../../models/contract";


@Component({
  selector: "app-employee",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"],
  providers: [EmployeeService],
})
export class EmployeeComponent implements OnInit {
  //constructor() {};
  //contracts: Contract[];

  constructor(public employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployee();
    this.getContract();
  }

  addEmployee(form?: NgForm) {

    if (form.value._id) {
      console.log(" if",form.value);

      this.employeeService.putEmployee(form.value).subscribe((_res) => {
        this.resetForm(form);
        this.getEmployee();
      });
    } else {
      console.log(" else",form.value);

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

  //Para el combobox
  getContract() {
    //console.log("asdfasdf");
    this.employeeService.getContracts().subscribe((res) => {
      // this.contracts = [
      //   {
      //     "_id": "5fa95b34fd657216bc475597",
      //     "id": "1151441479",
      //     "name": "José Rendón",
      //     "dateb": "2020-10-10T05:00:00.000Z",
      //     "address": "carr 51 # 81 - 31",
      //     "tel": "3003801675",
      //     "email": "jilberlv@hotmail.com",
      //     "enterprise": "Ips",
      //     "nob": "Obra1",
      //     "hourob": "400",
      //     "dayinit": 34
      //   },
      //   {
      //     "_id": "5fa95d6efd657216bc475599",
      //     "id": "c2e4j9c2f5i8i8e4c2",
      //     "name": "Gloria",
      //     "dateb": "2000-12-12T05:00:00.000Z",
      //     "address": "carr 51 # 81 - 31",
      //     "tel": "3003801675",
      //     "email": "jilberlv@hotmai.com",
      //     "enterprise": "Ips",
      //     "nob": "Obra1",
      //     "hourob": "400",
      //     "dayinit": 3434
      //   }
      // ];
      this.employeeService.contracts = res;
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