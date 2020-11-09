export class Employee {
    constructor(_id = "", id = 1, name = "", tcontrat="", dateb = "", address = "", tel = "",
    contract = "") {
      this._id = _id;
      this.id = id;
      this.name = name;
      this.tcontrat = tcontrat;
      this.dateb = dateb;
      this.address = address;
      this.tel = tel;
      this.contract = contract;
    }
  
    _id: string;
    id:number;
    name: string;
    tcontrat: string;
    dateb: string;
    address: string;
    tel: string;
    email: string;
    contract: string;
  }