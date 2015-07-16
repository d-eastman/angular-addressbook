'use strict';

angular.module("addressBookApp")
    .factory("contactsData", function () {

        var _contacts =  [
            {name: "Bart Simpson", phone: "555-555-1111", email: "bart@simpsons.com"},
            {name: "Homer Simpson", phone: "555-555-2222", email: "doh@simpsons.com"},
            {name: "Marge Simpson", phone: "555-555-3333", email: "marge@simpsons.com"},
            {name: "Lisa Simpson", phone: "555-555-4444", email: "lisa.simpson@simpsons.com"},
            {name: "Mr. Burns", phone: "555-666-1212", email: "el.jefe@burns.net"}
        ];

        var _getAllContacts = function() {
            return _contacts;
        };

        var _addNewContact = function(contact) {
            _contacts.push(contact);
        };

        //Public interface
        return {
            getAllContacts: _getAllContacts,
            addNewContact: _addNewContact
        };
    });
