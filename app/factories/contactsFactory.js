angular.module("addressBookApp")
  .factory("contactsFactory", ["$log", "$http", "$q",
    function($log, $http, $q) {

      'use strict';

      var urlBase = 'http://localhost:8001/api/';

      return {
        getAllContacts: function() {
          return $http.get(urlBase + "contacts");
        },
        getContactById: function(id) {
          return $http.get(urlBase + "contacts/" + id);
        },
        addNewContact: function(contact) {
          return $http.post(urlBase + "contacts", {
            contact: contact
          }); //Contact data must be wrapped as contact value
        },
        deleteContactById: function(id) {
          return $http.delete(urlBase + "contacts/" + id);
        },
        saveEditedContact: function(contact) {
          return $http.put(urlBase + "contacts", {
            contact: contact
          }); //Contact data must be wrapped as contact value
        },
        getAllGroups: function() {
          return $http.get(urlBase + "groups");
        },
        addNewGroup: function(group) {
          return $http.post(urlBase + "groups", {
            group: group
          });
        },
        getGroupById: function(id) {
          return $http.get(urlBase + "groups/" + id);
        },
        getContactsByGroupId: function(id) {
          return $http.get(urlBase + "groups/" + id + "/contacts");
        }
      };
    }
  ]);
