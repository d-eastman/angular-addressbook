angular.module("addressBookApp")
  .controller("NewContactController", ["$scope", "$location", "contactsFactory",
    function($scope, $location, contactsFactory) {

      'use strict';

      $scope.$emit('bubblePageSubtitle', "New Contact");

      $scope.newContact = null;

      $scope.save = function() {
        contactsFactory.addNewContact($scope.newContact)
          .then(function() {
              $location.url("/contacts");
            },
            function() {
              alert("Failed to save new contact");
            });
      };

      $scope.cancel = function() {
        $location.url("/contacts");
      };
    }
  ]);
