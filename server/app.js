const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const routes = require('./routes/routes');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

if(process.env.NODE_ENV !== 'test'){

mongoose.connect('mongodb://localhost/todoApp');
}
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  next();
});
routes(app);

app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
});

module.exports = app ;
