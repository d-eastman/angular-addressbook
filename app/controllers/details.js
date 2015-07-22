angular.module("addressBookApp")
  .controller("DetailsController", ["$scope", "$routeParams", "contactsFactory",
    function($scope, $routeParams, contactsFactory) {

      'use strict';

      $scope.$emit('bubblePageSubtitle', "Contact Details");

      $scope.contact = null;

      contactsFactory.getContactById($routeParams.id)
        .then(function(response) {
            $scope.contact = response.data;
          },
          function() {
            alert("Failed to get contact details");
          });
    }
  ]);
