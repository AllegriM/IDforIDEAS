const express = require('express');
const cookieParser = require('cookie-parser'); 
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('./db.js');
const {swaggerDocs} = require("./swagger")
const user = require('./routes/User');
const product = require('./routes/Product');
const server = express();

//swagger API
let port = process.env.PORT || 3001
swaggerDocs(server,port)


//middlewares
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser()); 
server.use(morgan('dev'));


//cors
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});  

//routes
server.use('/user',user)
server.use('/product',product)
server.use('/',(req,res) => {
  return res.json({"message":"please cheack your route"})
})
 


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  console.log(err)
  console.log(err.message)
  const message =  err.message;
  return res.status(status).send({error:message});
});

module.exports = server;
