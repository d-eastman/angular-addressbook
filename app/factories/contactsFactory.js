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
        getGroupById: function(id) {
          return $http.get(urlBase + "groups/" + id);
        },
        addNewGroup: function(group) {
          return $http.post(urlBase + "groups", {
            group: group
          });
        },
        deleteGroupById: function(id) {
          return $http.delete(urlBase + "groups/" + id);
        },
        saveEditedGroup: function(group) {
          return $http.put(urlBase + "groups", {
            group: group
          }); //Group data must be wrapped as contact value
        },
        getContactsByGroupName: function(groupName) {
          return $http.get(urlBase + "contacts/group/" + groupName);
        }
      };
    }
  ]);
