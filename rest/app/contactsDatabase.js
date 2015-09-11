"use strict";

var dbConn = require("./mongooseConnections.js");

var groupSchema = dbConn().Schema({
  name: String
});

var Group = dbConn().model("Group", groupSchema);

var contactSchema = dbConn().Schema({
  name: String,
  phone: String,
  email: String,
  groupName: String
});

var Contact = dbConn().model("Contact", contactSchema);

var singleObject_idToId = function(jsonObject) {
  jsonObject.id = jsonObject._id;
  delete jsonObject._id;
}

var array_idToId = function(jsonArrayOfObjects) {
  for (var i = 0; i < jsonArrayOfObjects.length; i++) {
    singleObject_idToId(jsonArrayOfObjects[i]);
  }
}

module.exports = {

  getAllContacts: function(callback) {
    //var db = mongoose.connect(dbUrl);
    Contact.find().lean().exec(function(err, contacts) {
      //db.disconnect();
      console.log("Mongoose returning " + contacts.length + " contacts");
      array_idToId(contacts);
      return callback(contacts);
    });
  },
  getContactById: function(id, callback) {
    //var db = mongoose.connect(dbUrl);
    Contact.findById(id).lean().exec(function(err, contact) {
      //db.disconnect();
      singleObject_idToId(contact);
      console.log("Mongoose found contact by id");
      return callback(contact);
    });
  },
  addNewContact: function(contact, callback) {
    //var db = mongoose.connect(dbUrl);
    var contactDoc = new Contact(contact);
    contactDoc.save(function(err, data) {
      //db.disconnect();
      console.log("Mongoose added new contact");
      singleObject_idToId(data);
      return callback(data);
    });
  },
  deleteContactById: function(id, callback) {
    //var db = mongoose.connect(dbUrl);
    Contact.findByIdAndRemove(id, function(err) {
      //db.disconnect();
      console.log("Mongoose removed contract by id");
      return callback();
    });
  },
  saveEditedContact: function(contact, callback) {
    //var db = mongoose.connect(dbUrl);
    contact._id = contact.id;
    delete contact.id;
    var contactDoc = new Contact(contact);
    Contact.findByIdAndUpdate(contactDoc._id, contactDoc).lean().exec(function(err, contact) {
      //db.disconnect();
      console.log("Mongoose updated contact by id");
      return callback(contact);
    });
  },
  nukeContacts: function(callback) {
    //var db = mongoose.connect(dbUrl);
    Contact.remove({}).exec(function(err) {
      //db.disconnect();
      console.log("Mongoose nuked contacts");
      return callback();
    });
  },
  getAllGroups: function(callback) {
    //var db = mongoose.connect(dbUrl);
    Group.find().lean().exec(function(err, groups) {
      //db.disconnect();
      console.log("Mongoose returning " + groups.length + " groups");
      array_idToId(groups);
      return callback(groups);
    });
  },
  getGroupById: function(id, callback) {
    //var db = mongoose.connect(dbUrl);
    Group.findById(id).lean().exec(function(err, group) {
      //db.disconnect();
      singleObject_idToId(group);
      console.log("Mongoose found group by id");
      return callback(group);
    });
  },
  addNewGroup: function(group, callback) {
    //var db = mongoose.connect(dbUrl);
    var groupDoc = new Group(group);
    groupDoc.save(function(err, data) {
      //db.disconnect();
      console.log("Mongoose added new group");
      singleObject_idToId(data);
      return callback(data);
    });
  },
  deleteGroupById: function(id, callback) {
    //var db = mongoose.connect(dbUrl);
    Group.findByIdAndRemove(id, function(err) {
      //db.disconnect();
      console.log("Mongoose removed group by id");
      return callback();
    });
  },
  saveEditedGroup: function(group, callback) {
    //var db = mongoose.connect(dbUrl);
    group._id = group.id;
    delete group.id;
    var groupDoc = new Group(group);
    Group.findByIdAndUpdate(groupDoc._id, groupDoc).lean().exec(function(err, group) {
      //db.disconnect();
      console.log("Mongoose updated group by id");
      return callback(group);
    });
  },
  nukeGroups: function(callback) {
    //var db = mongoose.connect(dbUrl);
    Group.remove({}).exec(function(err) {
      //db.disconnect();
      console.log("Mongoose nuked groups");
      return callback();
    });
  },
  getContactsByGroupName: function(groupName, callback) {
    //var db = mongoose.connect(dbUrl);
    Contact.find({
      groupName: groupName
    }).lean().exec(function(err, contacts) {
      //db.disconnect();
      console.log("Mongoose returning " + contacts.length + " contacts in group '" + groupName + "'");
      array_idToId(contacts);
      return callback(contacts);
    });
  }
};
