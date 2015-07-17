'use strict';

angular.module("addressBookApp")
    .controller("DetailsController", ["$scope", "$routeParams", "contactsData", "$log",
        function ($scope, $routeParams, contactsData, $log) {

            //$log.info($routeParams.id);

            $scope.contact = contactsData.getContactById($routeParams.id);

        }]);

