angular.module('addressBookApp')
  .controller("ContactsController", ["$scope", "contactsData", "$log",
    function($scope, contactsData, $log) {

      'use strict';

      $scope.$emit('bubblePageSubtitle', "");

      $scope.contacts = [];

      contactsData.getAllContacts()
        .success(function(contacts) {
          $scope.contacts = contacts;
        })
        .error(function() {
          alert("Could not get all contacts!");
        });

    }
  ]);
