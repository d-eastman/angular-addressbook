angular.module("addressBookApp")
  .controller("GroupDetailsController", ["$scope", "$location", "contactsFactory", "$routeParams",
    function($scope, $location, contactsFactory, $routeParams) {

      'use strict';

      $scope.$emit('bubblePageSubtitle', "Group Details");

      $scope.group = null;

      //      $scope.getGroupsById = function() {};

    }
  ]);
