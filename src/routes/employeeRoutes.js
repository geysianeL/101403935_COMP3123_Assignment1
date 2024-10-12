const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/v1/emp/employees', employeeController.getEmployees);
router.get('/v1/emp/employees/:eid', employeeController.getEmployee);
router.post('/v1/emp/employees', employeeController.createEmployee);
router.put('/v1/emp/employees/:eid', employeeController.updateEmployee);
router.delete('/v1/emp/employees', employeeController.updateEmployee);

module.exports = router;