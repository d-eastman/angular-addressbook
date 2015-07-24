angular.module("addressBookApp")
  .controller("GroupsController", ["$scope", "$location", "contactsFactory",
    function($scope, $location, contactsFactory) {

      'use strict';

      $scope.$emit('bubblePageSubtitle', "Groups");

      $scope.groups = null;
      $scope.newGroup = null;

      $scope.getAllGroups = function() {
        contactsFactory.getAllGroups()
          .then(function(response) {
              $scope.groups = response.data;
            },
            function() {
              alert("Could not get all groups!");
            });
      };
      $scope.getAllGroups(); //Call function

      $scope.save = function() {
        contactsFactory.addNewGroup($scope.newGroup)
          .then(function() {
              $scope.newGroup = null;
              $scope.getAllGroups();
            },
            function() {
              alert("Failed to save new group");
            });
      };

      $scope.cancel = function() {
        $location.url("/contacts");
      };

    }
  ]);
