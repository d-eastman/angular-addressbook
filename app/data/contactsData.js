'use strict';

angular.module("addressBookApp")
    .factory("contactsData", ["$log", "$http", "$q",
        function ($log, $http, $q) {

            var _contacts = [];
            var _isInit = false;

            var _isReady = function () {
                return _isInit;
            }

            var _getAllContacts = function () {

                $log.info("    _getAllContacts");

                var deferred = $q.defer();

                $http.get("http://localhost:8001/api/contacts").then(
                    function (result) {
                        $log.info("success 2");
                        angular.copy(result.data, _contacts);
                        _isInit = true;
                        deferred.resolve();
                    },
                    function () {
                        $log.info("failure 2");
                        deferred.reject();
                    }
                );

                return deferred.promise;
            };

            var _getContactById = function (id) {
                $log.info("_getContactById");
                for (var i = 0; i < _contacts.length; i++) {
                    if (_contacts[i].id == id) {
                        return _contacts[i];
                    }
                }

                return null;
            }

            var _addNewContact = function (contact) {
                $log.info("_addNewContact");
                var maxId = _getMaxContactId();
                if (contact.id === undefined || contact.id < maxId) {
                    contact.id = _getMaxContactId() + 1;
                }

                _contacts.push(contact);

                return contact;
            };

            var _saveEditedContact = function (contact) {
                $log.info("_saveEditedContact");
                for (var i = 0; i < _contacts.length; i++) {
                    if (_contacts[i].id == contact.id) {
                        _contacts[i] = contact;
                        return true;
                    }
                }

                return false;
            };

            var _deleteContactById = function (id) {
                $log.info("_deleteContactById");
                for (var i = 0; i < _contacts.length; i++) {
                    if (_contacts[i].id == id) {
                        _contacts.splice(i, 1); //Remove that one element
                        return true;
                    }
                }

                return false;
            };

            var _getMaxContactId = function () {
                $log.info("_getMaxContactId");
                var maxId = 0;
                for (var i = 0; i < _contacts.length; i++) {
                    if (_contacts[i].id > maxId) {
                        maxId = _contacts[i].id;
                    }
                }
                return maxId;
            };

            //Public interface
            return {
                contacts: _contacts,
                isReady: _isReady,
                getAllContacts: _getAllContacts,
                addNewContact: _addNewContact,
                getContactById: _getContactById,
                saveEditedContact: _saveEditedContact,
                deleteContactById: _deleteContactById
            };
        }]);
