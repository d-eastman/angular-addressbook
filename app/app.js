'use strict';

angular.module('addressBookApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when("/contacts/:id", {
                templateUrl: "details/details.html",
                controller: "DetailsController"
            })
            .when("/edit/:id", {
                templateUrl: "edit/edit.html",
                controller: "EditController"
            })
            .when("/delete/:id", {
                templateUrl: "delete/delete.html",
                controller: "DeleteController"
            })
            .when("/contacts", {
                templateUrl: "contacts/contacts.html",
                controller: "ContactsController"
            })
            .when("/newcontact", {
                templateUrl: "newcontact/newcontact.html",
                controller: "NewContactController"
            })
            .when("/about", {
                templateUrl: "about/about.html",
                controller: "AboutController"
            })
            .otherwise({redirectTo: '/contacts'});

    }]);

angular.module('addressBookApp')
    .controller("IndexController", ["$scope", "$route",
        function ($scope, $route) {

            $scope.pageSubtitle = "";

            $scope.$on('bubblePageSubtitle', function (e, data) {
                if (data !== undefined && data !== "") {
                    $scope.pageSubtitle = " - " + data;
                } else {
                    $scope.pageSubtitle = "";
                }
            });
    }]);