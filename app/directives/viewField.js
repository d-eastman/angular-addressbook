angular.module("addressBookApp")
  .directive("viewField", function() {

    'use strict';

    return {
      restrict: "E",
      replace: true,
      templateUrl: "templates/directives/viewField.html",
      scope: {
        fieldName: "@",
        fieldValue: "="
      }
    };
  });
