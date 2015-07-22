angular.module("addressBookApp")
  .directive("contactTile", function() {

    'use strict';

    return {
      restrict: "E",
      replace: true,
      templateUrl: "templates/directives/contactTile.html",
      scope: {
        contact: "="
      }
    };
  });
