import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Contract } from "../models/contract";

@Injectable({
  providedIn: "root",
})
export class ContractService {
  selectedContract: Contract;
  contracts: Contract[];
  readonly URL_API = "http://localhost:3000/api/contracts";

  constructor(private http: HttpClient) {
    this.selectedContract = new Contract();
    
  }



  postContract(contract: Contract) {
    console.log("add httpost contrat", contract);
    return this.http.post(this.URL_API, contract);
  }

  getContract() {
    //console.log("ASDF",this.http.get<Employee[]>(this.URL_API));
    return this.http.get<Contract[]>(this.URL_API);
  }

  putContract(contract: Contract) {
        console.log("edit httpost contrat", contract);

    return this.http.put(this.URL_API + `/${contract._id}`, contract);
  }

  deleteContract(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}