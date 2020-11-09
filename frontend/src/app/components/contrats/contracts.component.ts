import { Component, OnInit } from "@angular/core";

import { ContractService } from "../../services/contract.service";
import { NgForm } from "@angular/forms";
import { Contract } from "../../models/contract";

@Component({
  selector: "app-contract",
  templateUrl: "./contracts.component.html",
  styleUrls: ["./contracts.component.css"],
  providers: [ContractService],
})
export class ContractComponent implements OnInit {
  //constructor() {};

  constructor(public contractService: ContractService) {}

  ngOnInit() {
    this.getContracts();
  }

  addContract(form?: NgForm) {
    if (form.value._id) {
      console.log(" if",form.value);

      this.contractService.putContract(form.value).subscribe((_res) => {
        this.resetForm(form);
        this.getContracts();
      });
    } else {
      console.log(" else",form.value);

      this.contractService.postContract(form.value).subscribe((res) => {
        this.getContracts();
        this.resetForm(form);
      });
    }
  }

  getContracts() {
    //console.log("asdfasdf");
    this.contractService.getContract().subscribe((res) => {
     
      this.contractService.contracts = res;
    });
  }

  editContract(contract: Contract) {
    this.contractService.selectedContract = contract;
  }

  deleteContract(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.contractService.deleteContract(_id).subscribe((res) => {
        this.getContracts();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.contractService.selectedContract = new Contract();
    }
  }
}