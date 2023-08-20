const express = require('express');
const router = express.Router();
const cors = require('cors');
const domainController = require('../controllers/index');

const corsOptions = {
  origin: '*', 
  methods: 'GET,POST',
  optionsSuccessStatus: 200
};
router.use(cors(corsOptions));


router.post('/resolve', domainController.searchDomain);


router.get('/ip', domainController.IPController);

module.exports = router;
