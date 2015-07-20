'use strict';

angular.module("addressBookApp")
    .factory("contactsData", ["$log", "$http", "$q",
        function ($log, $http, $q) {

            var urlBase = 'http://localhost:8001/api/contacts';

            return {
                getAllContacts: function() {
                    return $http.get(urlBase);
                },
                getContactById: function(id) {
                    return $http.get(urlBase + "/" + id);
                },
                addNewContact: function(contact) {
                    return $http.post(urlBase, { contact: contact } ); //Contact data must be wrapped as contact value
                },
                deleteContactById: function(id) {
                    return $http.delete(urlBase + "/" + id);
                },
                saveEditedContact: function(contact) {
                    return $http.put(urlBase, { contact: contact } ); //Contact data must be wrapped as contact value
                }
            };
        }]);
