'use strict';

angular.module("addressBookApp")
    .controller("EditController", ["$scope", "$location", "$routeParams", "contactsData",
        function ($scope, $location, $routeParams, contactsData) {

            $scope.$emit('bubblePageSubtitle', "Edit Contact");

            //It's important to COPY the model or else the cancel event will STILL save the changes!
            $scope.editContact = angular.copy(contactsData.getContactById($routeParams.id));

            $scope.save = function () {

                contactsData.saveEditedContact($scope.editContact);

                $location.url("/contacts");

            }

            $scope.cancel = function () {

                $location.url("/contacts");

            }

        }]);

