angular.module("addressBookApp")
    .directive("viewField", function () {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "directives/viewField.html",
            scope: {
                fieldName: "@",
                fieldValue: "="
            }
        };
    });