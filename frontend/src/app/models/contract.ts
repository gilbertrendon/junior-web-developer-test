export class Contract {
    constructor(_id = "", id = "", name = "", dateb = "", address = "", tel = "",
    email = "", enterprise = "", nob = "", hourob = "", dayinit = 0
    ) {
      this._id = _id;
      this.id = id;
      this.name = name;
      this.dateb = dateb;
      this.address = address;
      this.tel = tel;
      this.email = email;
      this.enterprise = enterprise;
      this.nob = nob;
      this.hourob = hourob;
      this.dayinit = dayinit;
    }
  
    _id: string;
    id:string;
    name: string;
    dateb: string;
    address: string;
    tel: string;
    email: string;
    enterprise: string;
    nob: string;
    hourob:string;
    dayinit:number
  }