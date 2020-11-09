import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Employee } from "../models/employee";
import { Contract } from '../models/contract';

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  contracts: Contract[];
  readonly URL_API = "http://localhost:3000/api/employees";
  readonly URL_API2 = "http://localhost:3000/api/contracts";
  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
  }



  postEmployee(employee: Employee) {
    console.log(employee);
    return this.http.post(this.URL_API, employee);
  }

  getEmployees() {
    //console.log("ASDF",this.http.get<Employee[]>(this.URL_API));
    
    return this.http.get<Employee[]>(this.URL_API);
  }

  //Para el combobox
  getContracts() {
    //console.log("ASDF",this.http.get<Employee[]>(this.URL_API));
    //console.log("obteniendo contratos");
    return this.http.get<Contract[]>(this.URL_API2);
  }

  putEmployee(employee: Employee) {
    console.log(employee);

    return this.http.put(this.URL_API + `/${employee._id}`, employee);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}