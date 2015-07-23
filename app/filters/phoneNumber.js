angular.module("addressBookApp")
  .filter('phoneNumber', function() {
    return function(input) {
      if (input !== undefined && input !== null) {
        var digitsOnly = input.replace(/\D/g, ''); //Strip out non-numeric chars
        switch (digitsOnly.length) {
          case 10:
            return "(" + digitsOnly.slice(0, 3) + ") " + digitsOnly.slice(3, 6) + "-" + digitsOnly.slice(6);
          case 7:
            return digitsOnly.slice(0, 3) + "-" + digitsOnly.slice(3, 7);
          default:
            return input;
        }
      } else {
        return "";
      }
    }
  });
