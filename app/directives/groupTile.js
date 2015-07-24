angular.module("addressBookApp")
  .directive("groupTile", function() {

    'use strict';

    return {
      restrict: "E",
      replace: true,
      templateUrl: "templates/directives/groupTile.html",
      scope: {
        group: "="
      }
    };
  });
