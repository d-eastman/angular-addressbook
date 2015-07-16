'use strict';

angular.module("addressBookApp")
    .controller("NewContactController", ["$scope", "$location", "contactsData",
        function ($scope, $location, contactsData) {

            $scope.newContact = {};

            $scope.save = function () {

                contactsData.addNewContact($scope.newContact);

                $location.url("/contacts");

            };

            $scope.cancel = function () {

                $location.url("/contacts");

            };

        }]);