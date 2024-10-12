const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/auth');
const employeeController = require('../controllers/employeeController');

// there is additional middleware `authenticateToken` for checking jwt
router.get('/v1/emp/employees', authenticateToken, employeeController.listEmployee);
router.get('/v1/emp/employees/:eid', authenticateToken, employeeController.getEmployee);
router.post('/v1/emp/employees', authenticateToken, employeeController.createEmployee);
router.put('/v1/emp/employees/:eid', authenticateToken, employeeController.updateEmployee);
router.delete('/v1/emp/employees', authenticateToken, employeeController.deleteEmployee);

module.exports = router;