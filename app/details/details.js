'use strict';

angular.module("addressBookApp")
    .controller("DetailsController", ["$scope", "$routeParams", "contactsData",
        function ($scope, $routeParams, contactsData) {

            $scope.$emit('bubblePageSubtitle', "Contact Details");

            $scope.contact = contactsData.getContactById($routeParams.id);

        }]);

