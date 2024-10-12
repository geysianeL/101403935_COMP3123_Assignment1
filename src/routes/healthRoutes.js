const express = require('express');
const router = express.Router();
const healthController = require('../controllers/healthController');

router.get('/v1/ping', healthController.ping);

module.exports = router;