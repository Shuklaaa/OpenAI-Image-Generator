const express = require('express');
const { generateimage } = require('../controllers/openAIcontroller')
const router = express.Router();

router.post('/generateimage', generateimage);   // sets up a route for handling POST requests to the "/generateimage" endpoint. When a POST request is received at this endpoint, the generateimage function will be executed.

module.exports = router;   //router object is exported so that it can be used in other parts of the application.

