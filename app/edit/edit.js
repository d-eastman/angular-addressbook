'use strict';

angular.module("addressBookApp")
    .controller("EditController", ["$scope", "$location", "$routeParams", "contactsData", "$log",
        function ($scope, $location, $routeParams, contactsData, $log) {

            //It's important to COPY the model or else the cancel event will STILL save the changes!
            $scope.editContact = angular.copy(contactsData.getContactById($routeParams.id));

            $scope.save = function () {

                $log.info("save");

                contactsData.saveEditedContact($scope.editContact);

                $location.url("/contacts");

            }

            $scope.cancel = function () {

                $log.info("cancel");

                $location.url("/contacts");

            }

        }]);

