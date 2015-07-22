angular.module('addressBookApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {

    'use strict';

    $routeProvider
      .when("/contacts/:id", {
        templateUrl: "templates/details.html",
        controller: "DetailsController"
      })
      .when("/edit/:id", {
        templateUrl: "templates/edit.html",
        controller: "EditController"
      })
      .when("/delete/:id", {
        templateUrl: "templates/delete.html",
        controller: "DeleteController"
      })
      .when("/about", {
        templateUrl: "templates/about.html",
        controller: "AboutController"
      })
      .when("/contacts", {
        templateUrl: "templates/contacts.html",
        controller: "ContactsController"
      })
      .when("/newcontact", {
        templateUrl: "templates/newcontact.html",
        controller: "NewContactController"
      })
      .otherwise({
        redirectTo: '/contacts'
      });
  }]);
