angular.module("addressBookApp")
  .directive("iconLink", function() {

    'use strict';

    return {
      restrict: "E",
      replace: true,
      templateUrl: "templates/directives/iconLink.html",
      scope: {
        href: "@",
        src: "@",
        alt: "@"
      }
    };
  });
