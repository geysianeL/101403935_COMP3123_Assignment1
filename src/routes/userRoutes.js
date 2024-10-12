const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/v1/user/signup', userController.signUp);
router.post('/v1/user/login', userController.login);

module.exports = router;