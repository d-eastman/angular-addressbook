module.exports = {

    getAllContacts: function () {
        return _contacts;
    }
    ,
    getContactById: function (id) {
        for (var i = 0; i < _contacts.length; i++) {
            if (_contacts[i].id == id) {
                return _contacts[i];
            }
        }
        return null;
    }
    ,
    addNewContact: function (contact) {
        var maxId = _getMaxContactId();
        if (contact !== undefined && (contact.id === undefined || contact.id < maxId)) {
            contact.id = _getMaxContactId() + 1;
        }
        _contacts.push(contact);
        return contact;
    }
    ,
    deleteContactById: function (id) {
        for (var i = 0; i < _contacts.length; i++) {
            if (_contacts[i].id == id) {
                _contacts.splice(i, 1); //Remove that one element
                return true;
            }
        }
        return false;
    }
    ,
    saveEditedContact: function (contact) {
        for (var i = 0; i < _contacts.length; i++) {
            if (_contacts[i].id == contact.id) {
                _contacts[i] = contact;
                return true;
            }
        }
        return false;
    }

};

var _contacts = [
    {id: 1, name: "Bart Simpson", phone: "555-555-1111", email: "bart@simpsons.com"},
    {id: 2, name: "Homer Simpson", phone: "555-555-2222", email: "doh@simpsons.com"},
    {id: 3, name: "Marge Simpson", phone: "555-555-3333", email: "marge@simpsons.com"},
    {id: 4, name: "Lisa Simpson", phone: "555-555-4444", email: "lisa.simpson@simpsons.com"},
    {id: 5, name: "Mr. Burns", phone: "555-666-1212", email: "el.jefe@burns.net"}
];


var _getMaxContactId = function () {
    var maxId = 0;
    for (var i = 0; i < _contacts.length; i++) {
        if (_contacts[i].id > maxId) {
            maxId = _contacts[i].id;
        }
    }
    return maxId;
};