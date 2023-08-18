const express = require('express');
const router = express.Router();
const domainController = require('../controllers/domainController');

// /resolve rotası
router.get('/resolve', domainController.searchDomain);

// /ip rotası
router.get('/ip', domainController.IPController);

module.exports = router;
