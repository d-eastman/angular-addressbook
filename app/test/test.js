'use strict';

angular.module("addressBookApp")
/*    .factory('ContactsResource', function($resource) {

        return {
            getContacts: function() {
                return $resource('http://localhost:8001/api/contacts', { method: "GET", isArray: true}).get();
            }
        };

    })*/

    .controller("TestController", ["$scope", "$http", "$log",
        function ($scope, $http, $log) {

            $scope.contacts = $http.get("http://localhost:8001/api/contacts")
                .success( function(response, status) {
                    $log.info("success " + status);
                    $log.info(response);
                    $scope.contacts = response;
            }).error(function(data, status) {
                    $log.error("error " + status);
            });


        }]);

