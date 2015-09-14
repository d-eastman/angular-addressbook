// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var zlib = require('zlib');
var logService = require("./app/logService.js");
var contactsService = require("./app/contactsService.js");
var winston = require("winstonConfig.js");

var logger = new(winston.Logger)({
  transports: [
    new(winston.transports.Console)({
      level: 'warn'
    }),
    new(winston.transports.File)({
      filename: 'rest-server-activity.log',
      level: 'info',
      json: "false",
      maxsize: "10240"
    })
  ]
});

logger.info("REST SERVER STARTING UP AT " + Date.now());

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
  logger.info("VIEW REQUESTED: " + req.method + " " + req.url);
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({
    name: "AddressBook REST API",
    description: "This RESTful API provides data access for the demo Address Book application. Data is sent and returned in JSON format.",
    resources: [{
      endpoint: "/contacts",
      verb: "GET",
      purpose: "get all contacts",
      returns: "array of contact objects"
    }, {
      endpoint: "/contacts",
      verb: "POST",
      purpose: "save new contact",
      returns: "new contact object"
    }, {
      endpoint: "/contacts",
      verb: "PUT",
      purpose: "update contact",
      returns: "updated contact object"
    }, {
      endpoint: "/contacts/:id",
      verb: "GET",
      purpose: "get single contact by id",
      returns: "contact object"
    }, {
      endpoint: "/contacts/group/:groupName",
      verb: "GET",
      purpose: "get contacts in group by group name",
      returns: "array of contact objects"
    }, {
      endpoint: "/contacts/:id",
      verb: "DELETE",
      purpose: "delete contact",
      returns: "completion message"
    }, {
      endpoint: "/groups",
      verb: "GET",
      purpose: "get all groups",
      returns: "array of group objects"
    }, {
      endpoint: "/groups",
      verb: "POST",
      purpose: "save new group",
      returns: "new group object"
    }, {
      endpoint: "/groups",
      verb: "PUT",
      purpose: "update group",
      returns: "updated group object"
    }, {
      endpoint: "/groups/:id",
      verb: "DELETE",
      purpose: "delete group",
      returns: "confirmation message"
    }, {
      endpoint: "/log",
      verb: "POST",
      purpose: "save log message",
      returns: "message text"
    }]
  });
});

// more routes for our API will happen here
router.get("/nukecontacts/:secretCode", function(req, res) {
  if (req.params.secretCode !== undefined && req.params.secretCode === "secretNuclearLaunchCode") {
    contactsService.nukeContacts(function() {
      res.json("contacts nuked!");
    });
  } else {
    res.json("oops, failed to nuke contacts!")
  }
});

router.get("/nukegroups/:secretCode", function(req, res) {
  if (req.params.secretCode !== undefined && req.params.secretCode === "secretNuclearLaunchCode") {
    contactsService.nukeGroups(function() {
      res.json("groups nuked!");
    });
  } else {
    res.json("oops, failed to nuke groups!")
  }
});

router.get("/contacts/:id", function(req, res) {
  contactsService.getContactById(req.params.id, function(contact) {
    res.json(contact);
  });
});

router.get("/groups/:id", function(req, res) {
  contactsService.getGroupById(req.params.id, function(group) {
    res.json(group);
  });
});

router.delete("/contacts/:id", function(req, res) {
  contactsService.deleteContactById(req.params.id, function() {
    res.json("deleted contact");
  });
});

router.get("/contacts/group/:groupName", function(req, res) {
  contactsService.getContactsByGroupName(req.params.groupName, function(contacts) {
    res.json(contacts);
  });
});

router.delete("/groups/:id", function(req, res) {
  contactsService.deleteGroupById(req.params.id, function() {
    res.json("deleted group");
  });
});

router.put("/contacts", function(req, res) {
  contactsService.saveEditedContact(req.body.contact, function(contact) {
    res.json(contact);
  });
});

router.put("/groups", function(req, res) {
  contactsService.saveEditedGroup(req.body.group, function(group) {
    res.json(group);
  });
});

router.post("/contacts", function(req, res) {
  contactsService.addNewContact(req.body.contact, function(contact) {
    res.json(contact);
  });
});

router.post("/groups", function(req, res) {
  contactsService.addNewGroup(req.body.group, function(group) {
    res.json(group);
  });
});

router.get("/contacts", function(req, res) {
  contactsService.getAllContacts(function(contacts) {
    res.json(contacts);
  });
});

router.get("/groups", function(req, res) {
  contactsService.getAllGroups(function(groups) {
    res.json(groups);
  });
});

router.post("/log", function(req, res) {
  logService.saveLogMessage(req.body.message, function(message) {
    res.json(message);
  });
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('REST server started at http://localhost:' + port);
