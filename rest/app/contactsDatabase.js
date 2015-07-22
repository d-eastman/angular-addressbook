"use strict";

var mongoose = require("mongoose");
var dbUrl = "mongodb://localhost:27017/test";

var contactSchema = mongoose.Schema({
  name: String,
  phone: String,
  email: String
});

var Contact = mongoose.model("Contact", contactSchema);

module.exports = {

  getAllContacts: function(callback) {
    var db = mongoose.connect(dbUrl);
    Contact.find().lean().exec(function(err, contacts) {
      db.disconnect();
      console.log("Mongoose returning " + contacts.length + " contacts");
      array_idToId(contacts);
      return callback(contacts);
    });
  },
  addNewContact: function(contact, callback) {
    var db = mongoose.connect(dbUrl);
    var contactDoc = new Contact(contact);
    contactDoc.save(function(err, data) {
      db.disconnect();
      console.log("Mongoose added new contact");
      singleObject_idToId(data);
      return callback(data);
    });
  },
  getContactById: function(id, callback) {
    var db = mongoose.connect(dbUrl);
    Contact.findById(id).lean().exec(function(err, contact) {
      db.disconnect();
      singleObject_idToId(contact);
      console.log("Mongoose found contact by id");
      return callback(contact);
    });
  },
  deleteContactById: function(id, callback) {
    var db = mongoose.connect(dbUrl);
    Contact.findByIdAndRemove(id, function(err) {
      db.disconnect();
      console.log("Mongoose removed by id");
      return callback();
    });
  },
  saveEditedContact: function(contact, callback) {
    var db = mongoose.connect(dbUrl);
    contact._id = contact.id;
    delete contact.id;
    var contactDoc = new Contact(contact);
    Contact.findByIdAndUpdate(contactDoc._id, contactDoc).lean().exec(function(err, contact) {
      db.disconnect();
      console.log("Mongoose updated by id");
      return callback(contact);
    });
  },
  nukeContacts: function(callback) {
    var db = mongoose.connect(dbUrl);
    Contact.remove({}).exec(function(err) {
      db.disconnect();
      console.log("Mongoose nuked contacts");
      return callback();
    });
  }
};

var singleObject_idToId = function(jsonObject) {
  jsonObject.id = jsonObject._id;
  delete jsonObject._id;
}

var array_idToId = function(jsonArrayOfObjects) {
  for (var i = 0; i < jsonArrayOfObjects.length; i++) {
    singleObject_idToId(jsonArrayOfObjects[i]);
  }
}
