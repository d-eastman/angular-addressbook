'use strict';

describe("ContactsController", function() {

  var scope, fakeContactsFactory, controller, q, deferred;

  var fakeContactsDataArray = [{
    name: "test person",
    phone: "555-555-1234",
    email: "test.person@spec.com"
  }, {
    name: "2nd test person",
    phone: "555-555-3333",
    email: "test.person2@spec.com"
  }];

  beforeEach(function() {
    module("addressBookApp");

    fakeContactsFactory = {
      getAllContacts: function() {
        deferred = q.defer();
        deferred.resolve({
          "data": fakeContactsDataArray
        });
        return deferred.promise;
      }
    };
    spyOn(fakeContactsFactory, 'getAllContacts').and.callThrough();
  });

  beforeEach(inject(function($rootScope, $controller, $q) {
    scope = $rootScope.$new();
    q = $q;
    controller = $controller("ContactsController", {
      $scope: scope,
      contactsFactory: fakeContactsFactory
    });
  }));

  it('The $scope.contacts object is initially null', function() {
    expect(scope.contacts).toBeNull();
  });

  it('$apply causes $scope.contacts to be not null', function() {
    scope.$apply();
    expect(scope.contacts).not.toBeNull();
  });

  it('$apply causes contactsData.getAllContacts method invocation', function() {
    scope.$apply();
    expect(fakeContactsFactory.getAllContacts).toHaveBeenCalled();
  });

  it('Check value returned by contactsData.getAllContacts method', function() {
    scope.$apply();
    expect(scope.contacts).toBe(fakeContactsDataArray);
  });

});
