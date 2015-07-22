angular.module("addressBookApp")
  .directive("contactDetailDisplay", function() {

    'use strict';
    
    return {
      restrict: "E",
      replace: true,
      templateUrl: "templates/directives/contactDetailDisplay.html",
      scope: {
        contact: "="
      }
    };
  });
