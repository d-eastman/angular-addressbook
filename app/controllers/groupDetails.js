angular.module("addressBookApp")
  .controller("GroupDetailsController", ["$scope", "$location", "contactsFactory", "$routeParams",
    function($scope, $location, contactsFactory, $routeParams) {

      'use strict';

      $scope.$emit('bubblePageSubtitle', "Group Details");

      $scope.groupName = $routeParams.groupName;

      $scope.contactsInGroup = null;

      contactsFactory.getContactsByGroupName($routeParams.groupName)
        .success(function(contacts) {
          $scope.contactsInGroup = contacts;
        })
        .error(function() {
          alert("Failed to get group contacts");
        });
    }
  ]);
