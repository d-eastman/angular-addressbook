angular.module("addressBookApp")
  .controller("DeleteController", ["$scope", "$location", "$routeParams", "contactsData",
    function($scope, $location, $routeParams, contactsData) {

      'use strict';

      $scope.$emit('bubblePageSubtitle', "Delete Contact");

      contactsData.getContactById($routeParams.id)
        .success(function(contact) {
          $scope.deleteContact = contact;
        })
        .error(function() {
          alert("Failed to get contact details");
        });

      $scope.delete = function() {

        contactsData.deleteContactById($scope.deleteContact.id)
          .success(function() {
            $location.url("/contacts");
          })
          .error(function() {
            alert("Failed to get contact details");
          });
      };

      $scope.cancel = function() {

        $location.url("/contacts");

      };

    }
  ]);
