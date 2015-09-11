angular.module('addressBookApp')
  .controller("ContactsController", ["$scope", "contactsFactory", "$log", "$window",
    function($scope, contactsFactory, $log, $window) {

      'use strict';

      $scope.$emit('bubblePageSubtitle', "");

      $scope.contacts = null;

      contactsFactory.getAllContacts()
        .then(function(response) {

            //GOOD
            $scope.contacts = response.data;
            //GOOD

            //BAD//
            //console.info(response);
            //$scope.contacts = response; //Causes weird promise-related error
            //BAD

          },
          function() {
            alert("Could not get all contacts!");
          });

          /*$scope.changePathTest = function() {
            console.log($window.location.href);
            $window.location.href = '#/groups';
            console.log($window.location.href);
          };*/
    }
  ]);
