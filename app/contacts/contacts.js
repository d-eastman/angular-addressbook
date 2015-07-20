'use strict';

angular.module('addressBookApp')
    .controller("ContactsController", ["$scope", "contactsData", "$log",
        function ($scope, contactsData, $log) {
            $scope.data = contactsData;
            $scope.isBusy = false;

            $scope.$emit('bubblePageSubtitle', "");

            $log.info("$scope.isBusy: " + $scope.isBusy);

            $log.info("contactsData.isReady(): " + contactsData.isReady());

            if (contactsData.isReady() == false) {

                $scope.isBusy = true;

                contactsData.getAllContacts().then(
                    function () {
                        //Success, do thing
                        $log.info("contactsData.getAllContacts() - success");
                    },
                    function () {
                        //Failure
                        $log.info("contactsData.getAllContacts() - failure");
                        alert("Could not load contacts");
                    }).then(
                        function() {
                            $log.info("contactsData.getAllContacts() - finally");
                            $scope.isBusy = false;
                        });
            }
        }]);