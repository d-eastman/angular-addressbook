angular.module('addressBookApp')
  .controller("ContactsController", ["$scope", "contactsFactory", "$log",
    function($scope, contactsFactory, $log) {

      'use strict';

      $scope.$emit('bubblePageSubtitle', "");

      $scope.contacts = null;

      contactsFactory.getAllContacts()
        .then(function(response) {
            $scope.contacts = response.data;
          },
          function() {
            alert("Could not get all contacts!");
          });

    }
  ]);
