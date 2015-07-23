// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var contactsService = require("./app/contactsService.js");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8001; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// middleware to use for all requests - does its thing and then lets process drop through to other routes
router.use(function(req, res, next) {
  // allow cross-port calls
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // do logging
  console.log(req.method + " " + req.url);
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  //res.json({message: 'hooray! welcome to our api!'});
  res.json({
    message: "welcome to the REST api"
  });
});

// more routes for our API will happen here
router.get("/nukecontacts/:secretCode", function(req, res) {
  if (req.params.secretCode !== undefined && req.params.secretCode === "secretNuclearLaunchCode") {
    contactsService.nukeContacts(function() {
      res.json("nuked!");
    });
  } else {
    res.json("oops, failed to nuke!")
  }
});

router.get("/contacts/:id", function(req, res) {
  contactsService.getContactById(req.params.id, function(contact) {
    res.json(contact);
  });
});

router.delete("/contacts/:id", function(req, res) {
  contactsService.deleteContactById(req.params.id, function() {
    res.json("deleted");
  });
});

router.put("/contacts", function(req, res) {
  contactsService.saveEditedContact(req.body.contact, function(contact) {
    res.json(contact);
  });
});

router.post("/contacts", function(req, res) {
  contactsService.addNewContact(req.body.contact, function(contacts) {
    res.json(contacts);
  });
});

router.get("/contacts", function(req, res) {
  contactsService.getAllContacts(function(contacts) {
    res.json(contacts);
  });
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('REST server started at http://localhost:' + port);
