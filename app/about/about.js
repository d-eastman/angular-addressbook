'use strict';

angular.module('addressBookApp')
    .controller("AboutController", ["$scope",
        function ($scope) {

            $scope.$emit('bubblePageSubtitle', "About");

        }]);