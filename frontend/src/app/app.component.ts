import { Component, OnInit } from '@angular/core';
import { Employee } from "./models/employee";
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit{
  readonly URL_API = "http://localhost:3000/api/employees";
  employees: Employee[];
  horasobra: number;
  añadidura = 
    {
      "asdf": "asdf"
     
    };
  empcont = [
    {
      "_id": "5fa95b34fd657216bc475597",
      "id": "1151441479",
      "name": "José Rendón",
      "dateb": "2020-10-10T05:00:00.000Z",
      "address": "carr 51 # 81 - 31",
      "tel": "3003801675",
      "email": "jilberlv@hotmail.com",
      "enterprise": "Ips",
     "nob": "Obra1",
      "hourob": "400",
      "dayinit": 34
    },
    {
      "_id": "5fa95d6efd657216bc475599",
      "id": "c2e4j9c2f5i8i8e4c2",
      "name": "Gloria",
      "dateb": "2000-12-12T05:00:00.000Z",
      "address": "carr 51 # 81 - 31",
      "tel": "3003801675",
      "email": "jilberlv@hotmai.com",
      "enterprise": "Ips",
      "nob": "Obra1",
    "hourob": "400",
      "dayinit": 3434
    }
  ];

  //empcont.push(añadidura: any);

  title = 'frontend';
  constructor(private http: HttpClient) {
    //this.selectedEmployee = new Employee();
  }
  ngOnInit() {
     this.getEmployee();
    // this.getContract();
  }

  getEmployee() {

    return this.http.get<Employee[]>(this.URL_API).subscribe((res) => {
      //let nuevadata = this.añadidura.push(añadidura);
      //res.push(this.añadidura);
      res[0]["adsf"] = "asdf";
      console.log(res);
      this.employees = res;
    });
    //employe = Employee[];
    //console.log("asdfasdf");
    // this.employeeService.getEmployees().subscribe((res) => {
     
    //   this.employeeService.employees = res;
    // });
  }


}
