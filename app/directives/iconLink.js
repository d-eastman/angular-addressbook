angular.module("addressBookApp")
    .directive("iconLink", function () {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "directives/iconLink.html",
            scope: {
                href: "@",
                src: "@",
                alt: "@"
            }
        };
    });