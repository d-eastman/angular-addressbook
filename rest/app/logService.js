var db = require("./logDatabase.js");

var saveLogMessage = function(message, callback) {
  db.saveLogMessage(message, function(response) {
    console.log("Data service added new log message");
    return callback(response);
  });
}

module.exports = {
  saveLogMessage: saveLogMessage
}
