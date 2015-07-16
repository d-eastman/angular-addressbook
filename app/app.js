'use strict';

angular.module('addressBookApp', ['ngRoute']).
    config(['$routeProvider', function($routeProvider) {

        $routeProvider
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
