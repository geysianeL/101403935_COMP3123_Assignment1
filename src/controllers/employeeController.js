const Employee = require('../models/Employee');

exports.getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.eid);
    res.status(200).send({ status: true, message: employee});
  } catch (err) {
    res.status(400).send({ status: false, message: err.message });
  }
};

exports.listEmployee = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).send({ status: true, message: employees});
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    let result = await Employee.findByIdAndUpdate(req.params.eid, req.body)
    res.status(200).send({ status: true, message: result });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    let result = await Employee.create(req.body)
    res.status(200).send({ status: true, message: result });
  } catch (err) {
    res.status(400).send({ status: false, message: err.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.query.eid)
    res.status(200).send({ status: true, message: "Employee deleted successfully" });
  } catch (err) {
    res.status(400).send({ status: false, message: err.message });
  }
};