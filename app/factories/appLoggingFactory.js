angular.module("addressBookApp")
  .factory("appLoggingFactory", ["$log", "$http", "$q",
    function($log, $http, $q) {

      'use strict';

      var urlBase = 'http://localhost:8001/api/';

      return {
        saveLogMessage: function(message) {
          //console.log('appLoggingFactory.saveLogMessage: ' + message);
          return $http.post(urlBase + "log", {
            message: {
              message: message
            }
          });
        }
      }
    }
  ]);
