// THE router is all about taking in incoming requests and sending off to the right place

var BlockController = require('./block_controller');
var Block = require('./block');
var request = require('superagent');
var app = require('./app');

module.exports = (app) => {
  // Watch for incoming requests of method GET and POST
  // to the route http://localhost:8545/

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// THIS route (app.post) will allow to create new blocks with data!

  app.post("/addblock", (req, res) => {
    var myData = new Block(req.body);
    myData.save()
        .then(item => {
            res.send("Block DATA saved to database! WHOOOOOOOOOT!!");
            console.log(req.body)
        })
        .catch(err => {
            res.status(400).send("Unable to save to database :( sad face");
        });
});

  app.get("/api", (req, res) => {
    web3 =
      request
      .get('https://api.infura.io/v1/jsonrpc/mainnet/eth_blockNumber')
      .set('Content-Type', 'application/json')
      .set('token', 'xxxxxxxxxxxxxxxx')
      .then(res => {
        console.log(res.body.result);
        }).catch((e) => console.log(e));
});

app.post("/api", (req, res) => {
  web3 =
    request
    .get('https://api.infura.io/v1/jsonrpc/mainnet/eth_blockNumber')
    .set('Content-Type', 'application/json')
    .set('token', 'xxxxxxxxxxxxxxxx')
    .then(res => {
      console.log(res.body.result);
      }).catch((e) => console.log(e));
});

//   app.post('/latest', (req,res) =>{
//     request
//         .get('https://api.infura.io/v1/jsonrpc/mainnet/eth_getBlockByNumber')
//         .set('Content-Type', 'application/json')
//         .set('token', 'api-code-here')
//         .then(res => {
//             console.log(res.body);
//         }).catch((e) => console.log(e));
//         res.end(JSON.stringify(req.body));
// });
};
