const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/v1/user/signup',
    [
        check('username').notEmpty().withMessage('Please provide a username'),
        check('email').isEmail().withMessage('Please provide a valid email'),
        check('password').notEmpty().withMessage('Password is required')
    ],
    userController.signUp);

router.post('/v1/user/login',
    [
        check('email').isEmail().withMessage('Please provide a valid email'),
        check('password').notEmpty().withMessage('Password is required')
    ], userController.login);

module.exports = router;