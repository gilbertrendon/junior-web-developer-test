const express = require("express");
const router = express.Router();

const contract = require("../controllers/contract.controller");

router.get("/", contract.getContracts);

router.post("/", contract.createContract);

router.get("/:id", contract.getContract);

router.put("/:id", contract.editContract);

router.delete("/:id", contract.deleteContract);

module.exports = router;