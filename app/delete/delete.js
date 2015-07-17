'use strict';

angular.module("addressBookApp")
    .controller("DeleteController", ["$scope", "$location", "$routeParams", "contactsData",
        function ($scope, $location, $routeParams, contactsData) {

            $scope.deleteContact = angular.copy(contactsData.getContactById($routeParams.id));

            $scope.delete = function () {

                contactsData.deleteContactById($scope.deleteContact.id);

                $location.url("/contacts");

            }

            $scope.cancel = function () {

                $location.url("/contacts");

            }

        }]);

