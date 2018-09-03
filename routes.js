// THE router is all about taking in incoming requests and sending off to the right place

var Block = require('./block');
var request = require('superagent');
var app = require('./app');
var bodyParser = require('body-parser');
// var app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

module.exports = (app) => {
  // Watch for incoming requests of method GET and POST
  // to the route http://localhost:8545/

// declares result in order to hold res.body.result
let result;

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
//  =================================================================

app.post("/api/block", (req, res) => {
  let myData = new Block(
    {
      resultData: result,
    }
  );
  myData.save()
      .then(item => {
          res.send("Block DATA saved to database! WHOOOOOOOOOT!!");
          console.log(req.body);
      })
      .catch(err => {
          res.status(400).send("Unable to save to database :( sad face");
      });

});
//  ===================================================================

app.get("/api", (req, res) => {
  web3 =
    request
    .get('https://api.infura.io/v1/jsonrpc/mainnet/eth_blockNumber')
    .then(res => {
      result = res.body.result;
      console.log(result);
      }).catch((e) => console.log(e));
});
};
