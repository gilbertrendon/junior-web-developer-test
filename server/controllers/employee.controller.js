const Employee = require("../models/employee");

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res, next) => {
  const employees = await Employee.find();
  res.json(employees);
};

// id: {type: String, required: true},
// name: {type: String, required: true },
// tcontrat: {type: String, required: true },
// dateb: {type: Date, required: true },
// address: {type: String, required: true },
// tel: {type: String, required: true },
// email: {type: String, required:true}


employeeCtrl.createEmployee = async (req, res, next) => {
  const employee = new Employee({
    id: req.body.id,
    name: req.body.name,
    tcontrat: req.body.tcontrat,
    dateb: req.body.dateb,
    address: req.body.address,
    tel: req.body.tel,
    email: req.body.email,
    contract: req.body.contract


    
  });
  await employee.save();
  res.json({ status: "Employee created" });
};

employeeCtrl.getEmployee = async (req, res, next) => { 
  const { id } = req.params;
  const employee = await Employee.findById(id);
  res.json(employee);
};

employeeCtrl.editEmployee = async (req, res, next) => {
  const { id } = req.params;
  await Employee.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Employee Updated" });
};

employeeCtrl.deleteEmployee = async (req, res, next) => {
  await Employee.findByIdAndRemove(req.params.id);
  res.json({ status: "Employee Deleted" });
};

module.exports = employeeCtrl;