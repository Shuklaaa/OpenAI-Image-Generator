const path = require('path');  //The Path module provides a way of working with directories and file paths.
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();
// ENABLE BODY PARSER TO ACCESS BODY DATA
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));


app.use('/openai', require('./routes/openAIroutes'))

app.listen(port, () => console.log(`server started on port ${port}`));