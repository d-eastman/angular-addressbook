"use strict";

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
  },
  getAllGroups: function(callback) {
    var db = mongoose.connect(dbUrl);
    Group.find().lean().exec(function(err, groups) {
      db.disconnect();
      console.log("Mongoose returning " + groups.length + " groups");
      array_idToId(groups);
      return callback(groups);
    });
  },
  addNewGroup: function(group, callback) {
    var db = mongoose.connect(dbUrl);
    var groupDoc = new Group(group);
    groupDoc.save(function(err, data) {
      db.disconnect();
      console.log("Mongoose added new group");
      singleObject_idToId(data);
      return callback(data);
    });
  }
};

//Private functionality and data
var mongoose = require("mongoose");
var dbUrl = "mongodb://localhost:27017/test";

var groupSchema = mongoose.Schema({
  name: String
});

var Group = mongoose.model("Group", groupSchema);

var contactSchema = mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  groupName: String
});

var Contact = mongoose.model("Contact", contactSchema);

var singleObject_idToId = function(jsonObject) {
  jsonObject.id = jsonObject._id;
  delete jsonObject._id;
}

var array_idToId = function(jsonArrayOfObjects) {
  for (var i = 0; i < jsonArrayOfObjects.length; i++) {
    singleObject_idToId(jsonArrayOfObjects[i]);
  }
}
