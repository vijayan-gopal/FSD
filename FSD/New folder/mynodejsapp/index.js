const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const umpiringroutes = require('./routes')

//loggers constants:
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
//create write stream in append mode
var accessLogStream = fs.createWriteStream(path.join(__dirname,'app.log'),{flags:'a'})

app.use(express.static('files'))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

//setup the logger
app.use(morgan('combined',{stream: accessLogStream}))

umpiringroutes(app);
//set port
var port = process.env.PORT || 3000;

//console.log("Server running at http://localhost:%d", port);
app.listen(port,()=>{console.log("Listening to http://localhost:%d", port)})  
