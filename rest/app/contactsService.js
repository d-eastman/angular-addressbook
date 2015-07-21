var db = require("./contactsDatabase.js");

module.exports = {

  hi: function() {
    return db.sayHi();
  },
  getAllContacts: function(callback) {
    db.getAllContacts(function(contacts) {
      console.log("Data service returning " + contacts.length + " contacts");
      return callback(contacts);
    });
  },
  nukeContacts: function(callback) {
    db.nukeContacts(function() {
      console.log("Data service nuked contacts");
      return callback();
    });
  },
  getContactById: function(id, callback) {
    db.getContactById(id, function(contact) {
      console.log("Data service got contact by id");
      return callback(contact);
    });
  },
  addNewContact: function(contact, callback) {
    db.addNewContact(contact, function(response) {
      console.log("Data service added new contact");
      return callback(response);
    });
  },
  deleteContactById: function(id, callback) {
    db.deleteContactById(id, function() {
      console.log("Data service deleted by id");
      return callback();
    });
  },
  saveEditedContact: function(contact, callback) {
    db.saveEditedContact(contact, function(contact) {
      console.log("Data service updated edited contact");
      return callback(contact);
    });
  }
};
