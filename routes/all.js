const express = require('express');
const router = express.Router();
const cors = require('cors');
const domainController = require('../controllers/index');

// CORS ayarlarını özelleştirme
const corsOptions = {
  origin: 'https://ipsclient.vercel.app', // Tüm originlerden gelen isteklere izin verilir
  methods: 'GET,POST',
  optionsSuccessStatus: 200
};
router.use(cors(corsOptions));

// /resolve rotası
router.post('/resolve', domainController.searchDomain);

// /ip rotası
router.get('/ip', domainController.IPController);

module.exports = router;
