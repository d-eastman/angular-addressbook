"use strict";

var mongoose = require("mongoose");
var dbUrl = "mongodb://localhost:27017/test";
var mongoose = mongoose.connect(dbUrl);

mongoose.connection.on('connected', function() {
  console.log('Mongoose default connection open to ' + dbUrl);
});

mongoose.connection.on('error', function() {
  console.log('Mongoose default connection error: ' + dbUrl);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose default connection closed');
  })
});

var dbConn = function() {
  return mongoose;
};

module.exports = dbConn;
