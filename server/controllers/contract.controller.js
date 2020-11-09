const Contract = require("../models/contract");

const contractCtrl = {};

contractCtrl.getContracts = async (req, res, next) => {
  const contracts = await Contract.find();
  res.json(contracts);
};

// id: {type: String, required: true},
// name: {type: String, required: true },
// tcontrat: {type: String, required: true },
// dateb: {type: Date, required: true },
// address: {type: String, required: true },
// tel: {type: String, required: true },
// email: {type: String, required:true}


contractCtrl.createContract = async (req, res, next) => {
  const contract = new Contract({
    id: req.body.id,
    name: req.body.name,
    dateb: req.body.dateb,
    address: req.body.address,
    tel: req.body.tel,
    email: req.body.email,
    enterprise: req.body.enterprise,
    nob: req.body.nob,
    hourob: req.body.hourob,
    dayinit: req.body.dayinit

  });
  await contract.save();
  res.json({ status: "Contract created" });
};

contractCtrl.getContract = async (req, res, next) => { 
  const { id } = req.params;
  const contract = await Contract.findById(id);
  res.json(contract);
};

contractCtrl.editContract = async (req, res, next) => {
  const { id } = req.params;
  await Contract.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Contract Updated" });
};

contractCtrl.deleteContract = async (req, res, next) => {
  await Contract.findByIdAndRemove(req.params.id);
  res.json({ status: "Contract Deleted" });
};

module.exports = contractCtrl;