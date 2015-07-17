'use strict';

angular.module('addressBookApp')
    .controller("ContactsController", ["$scope", "contactsData",
        function ($scope, contactsData) {

            $scope.contacts = contactsData.getAllContacts();

        }]);