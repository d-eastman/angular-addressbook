'use strict';

angular.module('addressBookApp')
    .controller("ContactsController", ["$scope", "contactsData",
        function ($scope, contactsData) {

            $scope.$emit('bubblePageSubtitle', "");

            $scope.contacts = contactsData.getAllContacts();

        }]);