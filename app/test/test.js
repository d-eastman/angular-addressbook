'use strict';

angular.module("addressBookApp")
    .controller("TestController", ["$scope", "contactsData", "$routeParams",
        function ($scope, contactsData, $routeParams) {

            $scope.contact;
            $scope.status;

            contactsData.addNewContact(
                {name: "Bart Simpson 10", phone: "555-555-1111", email: "bart@simpsons.com"}
            )
                .success(function(contact) {
                    $scope.contact = contact;
                })
                .error(function(error) {
                    $scope.status = error.message;
                })


        }]);

