angular.module('addressBookApp')
  .controller("AboutController", ["$scope",
    function($scope) {

      'use strict';

      $scope.$emit('bubblePageSubtitle', "About");

    }
  ]);
