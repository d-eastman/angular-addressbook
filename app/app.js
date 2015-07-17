'use strict';

angular.module('addressBookApp', ['ngRoute']).
    config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when("/contacts/:id", {
                templateUrl: "details/details.html",
                controller: "DetailsController"
            })
            .when("/edit/:id", {
                templateUrl: "edit/edit.html",
                controller: "EditController"
            })
            .when("/contacts", {
                templateUrl: "contacts/contacts.html",
                controller: "ContactsController"
            })
            .when("/newcontact", {
                templateUrl: "newcontact/newcontact.html",
                controller: "NewContactController"
            })
            .otherwise({redirectTo: '/contacts'});

    }]);
