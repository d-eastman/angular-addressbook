module.exports = {

    getAllContacts: function () {
        return _contacts;
    }

};

var _contacts = [
    {id: 1, name: "Bart Simpson", phone: "555-555-1111", email: "bart@simpsons.com"},
    {id: 2, name: "Homer Simpson", phone: "555-555-2222", email: "doh@simpsons.com"},
    {id: 3, name: "Marge Simpson", phone: "555-555-3333", email: "marge@simpsons.com"},
    {id: 4, name: "Lisa Simpson", phone: "555-555-4444", email: "lisa.simpson@simpsons.com"},
    {id: 5, name: "Mr. Burns", phone: "555-666-1212", email: "el.jefe@burns.net"}
];
