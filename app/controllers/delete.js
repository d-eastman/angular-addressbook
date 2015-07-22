angular.module("addressBookApp")
  .controller("DeleteController", ["$scope", "$location", "$routeParams", "contactsFactory",
    function($scope, $location, $routeParams, contactsFactory) {

      'use strict';

      $scope.$emit('bubblePageSubtitle', "Delete Contact");

      $scope.deleteContact = null;

      contactsFactory.getContactById($routeParams.id)
        .then(function(response) {
            $scope.deleteContact = response.data;
          },
          function() {
            alert("Failed to get contact details");
          });

      $scope.delete = function() {
        contactsFactory.deleteContactById($scope.deleteContact.id)
          .then(function() {
              $location.url("/contacts");
            },
            function() {
              alert("Failed to get contact details");
            });
      };

      $scope.cancel = function() {
        $location.url("/contacts");
      };
    }
  ]);
