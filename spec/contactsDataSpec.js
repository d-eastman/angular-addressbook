'use strict';

describe("contactsData", function() {

    beforeEach(module("addressBookApp"));

    it("'getAllContacts' should return more than one contact", inject(function(contactsData) {

        expect(contactsData.getAllContacts().length).toBeGreaterThan(0);

    }));

    it("'getAllContacts' should return Bart as the first contact", inject(function(contactsData) {

        expect(contactsData.getAllContacts()[0]["name"]).toBe("Bart Simpson");

    }));

    it("'addNewContact' should increment 'getAllContacts' array length by one", inject(function(contactsData) {

        var length = contactsData.getAllContacts().length;
        var newContact = { name: "Test", phone: "000-111-2222", email: "test@email.com" };
        contactsData.addNewContact(newContact);
        expect(contactsData.getAllContacts().length).toBe(length + 1);

    }));

    it("'addNewContact' should add the new contact at end of 'getAllContacts' array", inject(function(contactsData) {

        var newContact = { name: "Test", phone: "000-111-2222", email: "test@email.com" };
        contactsData.addNewContact(newContact);
        var allContacts =contactsData.getAllContacts();
        expect(allContacts[allContacts.length-1]).toBe(newContact);

    }));

});