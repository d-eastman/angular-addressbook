angular.module('addressBookApp')
  .controller("IndexController", ["$scope",
    function($scope) {

      'use strict';

      $scope.pageSubtitle = "";

      $scope.$on('bubblePageSubtitle', function(e, data) {
        if (data !== undefined && data !== "") {
          $scope.pageSubtitle = " - " + data;
        } else {
          $scope.pageSubtitle = "";
        }
      });
    }
  ]);
