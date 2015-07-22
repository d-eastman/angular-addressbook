angular.module("addressBookApp")
  .controller("EditController", ["$scope", "$location", "$routeParams", "contactsFactory",
    function($scope, $location, $routeParams, contactsFactory) {

      'use strict';

      $scope.$emit('bubblePageSubtitle', "Edit Contact");

      $scope.editContact = {};

      contactsFactory.getContactById($routeParams.id)
        .success(function(contact) {
          $scope.editContact = contact;
        })
        .error(function() {
          alert("Failed to get contact details");
        });

      $scope.save = function() {

        contactsFactory.saveEditedContact($scope.editContact)
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
