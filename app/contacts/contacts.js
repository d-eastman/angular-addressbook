'use strict';

angular.module('addressBookApp')
    .controller("ContactsController", ["$scope", "contactsData",
        function ($scope, contactsData) {

            $scope.mousePointerStyle = { 'cursor': 'default' };

            $scope.toggleDetailsVisibility = function (contact) {
                contact.detailsVisible = !contact.detailsVisible;
            };

            $scope.contacts = contactsData.getAllContacts();

            $scope.mouseEnter = function() {
                $scope.mousePointerStyle = { 'cursor': 'pointer' };
            };

            $scope.mouseLeave = function() {
                $scope.mousePointerStyle = { 'cursor': 'default' };
            };


        }]);