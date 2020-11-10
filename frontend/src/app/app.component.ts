import { Component, OnInit } from '@angular/core';
import { Employee } from "./models/employee";
import { Contract } from "./models/contract";

import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit{
  email = 'UnitTest';
  readonly URL_API = "http://localhost:3000/api/employees";
  readonly URL_API1 = "http://localhost:3000/api/contracts";

  employees: Employee[];
  contracts: Contract[];
  contracts2: Contract[];
  idobra: String;
  whours: number;
  wname: String;
  remainh: String;
  //Para las horas 
  dayinithours: number;
  totaldays: number;
  totalhours: number;
 
  // empcont = [
  //   {
  //     "_id": "5fa95b34fd657216bc475597",
  //     "id": "1151441479",
  //     "name": "José Rendón",
  //     "dateb": "2020-10-10T05:00:00.000Z",
  //     "address": "carr 51 # 81 - 31",
  //     "tel": "3003801675",
  //     "email": "jilberlv@hotmail.com",
  //     "enterprise": "Ips",
  //    "nob": "Obra1",
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
  //   "hourob": "400",
  //     "dayinit": 3434
  //   }
  // ];

  title = 'frontend';
  constructor(private http: HttpClient) {
    //this.selectedEmployee = new Employee();
  }
  ngOnInit() {
     this.getEmployee();
     this.getContract();
  }

  getEmployee() {

    return this.http.get<Employee[]>(this.URL_API).subscribe((res) => {
      let fechaini;
      let fechahoy = new Date();
      let hoursactualday;
      let contador = 0;
      //this.contracts2 = this.getContract().toString();
      console.log(this.contracts)
    for(let j in res){
      for(let i in this.contracts){
        console.log(res[contador]["contract"],i["_id"]);
        if(res[contador]["contract"] == i["_id"]){
          console.log("insertando elementos a un employee");
          this.whours = i[contador]["hourob"];
          res[contador]["whours"] = "4444";
  
          this.wname = i[contador]["nob"];
          res[contador]["nob"] = this.wname;
  
          fechaini = new Date();
    
          this.totaldays = fechaini.getTime();
          this.totaldays = Math.round(this.totaldays/(1000 * 60 * 60 * 24));
          this.dayinithours = this.totaldays*24;
          this.totalhours = this.dayinithours + i[contador]["hourob"];
          hoursactualday = fechahoy.getTime();
          hoursactualday = Math.round(hoursactualday/(1000 * 60 * 60 * 24));
          hoursactualday = hoursactualday*24;
          this.remainh = (this.totalhours - hoursactualday).toString();
          res[contador]["remainhours"] = this.remainh;
        }
        
      }
      contador = contador + 1;
    }
      //res[0]["adsf"] = "asdf".substr(0,2);

      this.employees = res;
    });
   
  }

  getContract() {
    return this.http.get<Contract[]>(this.URL_API1).subscribe((res) => {
      //console.log(res);
      this.contracts = res;
    });
    //employe = Employee[];
    //console.log("asdfasdf");
    // this.employeeService.getEmployees().subscribe((res) => {
     
    //   this.employeeService.employees = res;
    // });
  }


}
