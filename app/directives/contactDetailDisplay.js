angular.module("addressBookApp")
    .directive("contactDetailDisplay", function () {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "directives/contactDetailDisplay.html",
            scope: {
                contact: "="
            }
        };
    });