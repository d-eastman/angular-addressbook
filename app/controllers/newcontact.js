angular.module("addressBookApp")
  .controller("NewContactController", ["$scope", "$location", "contactsData",
    function($scope, $location, contactsData) {

      'use strict';

      $scope.$emit('bubblePageSubtitle', "New Contact");

      $scope.newContact = {};

      $scope.save = function() {

        contactsData.addNewContact($scope.newContact)
          .success(function() {
            $location.url("/contacts");
          })
          .error(function() {
            alert("Failed to save new contact");
          });
      };

      $scope.cancel = function() {

        $location.url("/contacts");

      };

    }
  ]);
