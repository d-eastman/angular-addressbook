'use strict';

angular.module('addressBookApp', ['ngRoute', 'ngResource'])
    .config(['$routeProvider', '$sceDelegateProvider', function ($routeProvider, $sceDelegateProvider) {

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
            .when("/test", {
                templateUrl: "test/test.html",
                controller: "TestController"
            })
            .otherwise({redirectTo: '/contacts'});

//        $sceDelegateProvider.resourceUrlWhitelist([
//            // Allow same origin resource loads.
//            'self',
//            // Allow loading from our assets domain.  Notice the difference between * and **.
//            'http://localhost:8001/**'
//        ]);
    }]);

angular.module('addressBookApp')
    .controller("IndexController", ["$scope",
        function ($scope) {

            $scope.pageSubtitle = "";

            $scope.$on('bubblePageSubtitle', function (e, data) {
                if (data !== undefined && data !== "") {
                    $scope.pageSubtitle = " - " + data;
                } else {
                    $scope.pageSubtitle = "";
                }
            });
    }]);