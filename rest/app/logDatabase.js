"use strict";

var dbConn = require("./mongooseConnections.js");

var logSchema = dbConn().Schema({
  message: String,
  creationTime: Date
});

var LogModel = dbConn().model("Log", logSchema);

var saveLogMessage = function(message, callback) {
  //var db = mongoose.connect(dbUrl);
  var logDoc = new LogModel(message);
  logDoc.creationTime = Date.now();
  //messageDoc.dtstamp = Date.now();
  logDoc.save(function(err, data) {
    //db.disconnect();
    console.log("Mongoose added new log message");
    return callback(data);
  });
};

//PUBLIC INTERFACE
module.exports.saveLogMessage = saveLogMessage;
