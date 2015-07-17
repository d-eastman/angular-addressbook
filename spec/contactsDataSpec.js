'use strict';

describe("contactsData", function () {

    beforeEach(module("addressBookApp"));

    it("'getAllContacts' should return more than one contact", inject(function (contactsData) {

        expect(contactsData.getAllContacts().length).toBeGreaterThan(0);

    }));

    it("'getAllContacts' should return Bart as the first contact", inject(function (contactsData) {

        expect(contactsData.getAllContacts()[0]["name"]).toBe("Bart Simpson");

    }));

    it("'addNewContact' should increment 'getAllContacts' array length by one", inject(function (contactsData) {

        var length = contactsData.getAllContacts().length;
        var newContact = {name: "Test", phone: "000-111-2222", email: "test@email.com"};
        contactsData.addNewContact(newContact);
        expect(contactsData.getAllContacts().length).toBe(length + 1);

    }));

    it("'addNewContact' should add the new contact at end of 'getAllContacts' array", inject(function (contactsData) {

        var newContact = {name: "Test", phone: "000-111-2222", email: "test@email.com"};
        contactsData.addNewContact(newContact);
        var allContacts = contactsData.getAllContacts();
        expect(allContacts[allContacts.length - 1]).toBe(newContact);

    }));

    it("'saveEditedContact' should replace the old copy of the contact with the new edited one", inject(function (contactsData) {

        var origContact = contactsData.getAllContacts()[0];
        expect(origContact.phone).not.toBe("000-000-0000"); //Ensure that existing contact phone isn't what we're going to change it to
        var copyToEdit = angular.copy(origContact);
        copyToEdit.name = "_" + copyToEdit.name;
        copyToEdit.email = "_" + copyToEdit.email;
        copyToEdit.phone = "000-000-0000";
        contactsData.saveEditedContact(copyToEdit);
        var modContact = contactsData.getAllContacts()[0];
        expect(modContact.name).toBe("_" + origContact.name);
        expect(modContact.email).toBe("_" + origContact.email);
        expect(modContact.phone).toBe("000-000-0000");
    }));

    it("'getContactById' should get the contact with the correct id", inject(function (contactsData) {

        var allContacts = contactsData.getAllContacts();
        expect(contactsData.getContactById(allContacts[0].id)).toBe(allContacts[0]); //Check first
        if (allContacts.length > 1) {
            expect(contactsData.getContactById(allContacts[allContacts.length - 1].id)).toBe(allContacts[allContacts.length - 1]); //Check last if more than one
        }

    }));

    it("'getContactById' should return null given an invalid id", inject(function (contactsData) {

        expect(contactsData.getContactById(-1)).toBeNull();

    }));

    it("'deleteContact' should remove a contact", inject(function (contactsData) {

        var allContacts = angular.copy(contactsData.getAllContacts());
        var copyToDelete = angular.copy(allContacts[0]); //Remove the first one
        contactsData.deleteContactById(copyToDelete.id);
        var allContactsAfterDelete = contactsData.getAllContacts();
        expect(allContactsAfterDelete.length).toBe(allContacts.length - 1);

    }));

    it("'deleteContact' should return false for a non-existent contact", inject(function (contactsData) {

        expect(contactsData.deleteContactById(0)).toBeFalsy();

    }));

});