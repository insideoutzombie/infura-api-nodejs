// THIS file is the heart or brains of the app

var Web3 = require('web3');
var request = require('superagent');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes');
var app = express();
var BlockController = require('./block_controller');

// web3 = new Web3("https://api.infura.io/v1/jsonrpc/mainnet/eth_getBlockByNumber", 'Content-Type', 'application/json', 'token', '450589da6a084a62a3e210d65b02192e' );

// THIS call is acutally working!! Also displays data via the terminal!
// web3 =
//   request
//   .get('https://api.infura.io/v1/jsonrpc/mainnet/eth_blockNumber')
//   .set('Content-Type', 'application/json')
//   .set('token', 'api-code-here')
//   .then(res => {
// // IF you uncomment console.log it will display the information in the terminal window of the blockdata
//     console.log(res.body);
//     // app.post({"text": "Super human fighter monkeys"});
//     }).catch((e) => console.log(e));

mongoose.Promise = global.Promise;
// THE code below creates the shell in the DB named 'block'
mongoose.connect('mongodb://localhost/block', { useNewUrlParser: true });

// THE code below is a middleware and says that any incoming
// requests auto assume is json and parse it into an object request.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Important that you place the app.use call above the routes app!
routes(app);

module.exports = app;
