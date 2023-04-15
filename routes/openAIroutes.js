const express = require('express');
const { generateimage } = require('../controllers/openAIcontroller')
const router = express.Router();

router.post('/generateimage', generateimage);

module.exports = router;

