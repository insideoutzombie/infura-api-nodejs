// THIS file is the heart or brains of the app

var Web3 = require('web3');
var request = require('superagent');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
// THE code below creates the shell in the DB named 'block'
mongoose.connect('mongodb://localhost/block', { useNewUrlParser: true });

// THE code below is a middleware and says that any incoming
// requests auto assume is json and parse it into an object request.
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// Important that you place the app.use call above the routes app!
routes(app);

module.exports = app;
