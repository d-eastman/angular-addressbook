'use strict';

describe("NewContactController", function() {

  var scope, fakeContactsFactory, controller, q, deferred;

  var fakeContactsDataObject = {
    id: "1a",
    name: "test person",
    phone: "555-555-1234",
    email: "test.person@spec.com"
  };

  beforeEach(function() {
    module("addressBookApp");

    fakeContactsFactory = {
      addNewContact: function(contact) {
        deferred = q.defer();
        deferred.resolve();
        return deferred.promise;
      }
    };
    spyOn(fakeContactsFactory, 'addNewContact').and.callThrough();
  });

  beforeEach(inject(function($rootScope, $controller, $q) {
    scope = $rootScope.$new();
    q = $q;
    controller = $controller("NewContactController", {
      $scope: scope,
      contactsFactory: fakeContactsFactory
    });
  }));

  describe("on load", function() {

    it('The $scope.newContact object is initially a null object', function() {
      expect(scope.newContact).toBeNull();
    });

  });

  describe("on save", function() {

    it("save action causes contactsData.addNewContact method invocation", function() {
      scope.$apply();
      scope.newContact = fakeContactsDataObject;
      scope.save();
      expect(fakeContactsFactory.addNewContact).toHaveBeenCalled();
    });

    it("delete action causes contactsData.addNewContact method invocation with correct args", function() {
      scope.$apply();
      scope.newContact = fakeContactsDataObject;
      scope.save();
      expect(fakeContactsFactory.addNewContact).toHaveBeenCalledWith(fakeContactsDataObject);
    });

  });

});
