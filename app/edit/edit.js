'use strict';

angular.module("addressBookApp")
    .controller("EditController", ["$scope", "$location", "$routeParams", "contactsData",
        function ($scope, $location, $routeParams, contactsData) {

            $scope.$emit('bubblePageSubtitle', "Edit Contact");

            $scope.editContact;

            contactsData.getContactById($routeParams.id)
                .success(function (contact) {
                    $scope.editContact = contact;
                })
                .error(function () {
                    alert("Failed to get contact details");
                });

            $scope.save = function () {

                contactsData.saveEditedContact($scope.editContact)
                    .success(function () {
                        $location.url("/contacts");
                    })
                    .error(function () {
                        alert("Failed to save new contact");
                    });
            }

            $scope.cancel = function () {

                $location.url("/contacts");

            }

        }]);

