'use strict';

describe("DeleteController", function() {

  var scope, fakeContactsFactory, controller, q, deferred, routeParams;

  var fakeContactsDataObject = {
    id: "1a",
    name: "test person",
    phone: "555-555-1234",
    email: "test.person@spec.com"
  };

  beforeEach(function() {
    module("addressBookApp");

    fakeContactsFactory = {
      getContactById: function(id) {
        deferred = q.defer();
        deferred.resolve({
          "data": fakeContactsDataObject
        });
        return deferred.promise;
      },
      deleteContactById: function(id) {
        deferred = q.defer();
        deferred.resolve();
        return deferred.promise;
      }
    };
    spyOn(fakeContactsFactory, 'getContactById').and.callThrough();
    spyOn(fakeContactsFactory, 'deleteContactById').and.callThrough();
  });

  beforeEach(inject(function($rootScope, $controller, $q, $routeParams) {
    scope = $rootScope.$new();
    q = $q;
    routeParams = $routeParams;
    controller = $controller("DeleteController", {
      $scope: scope,
      contactsFactory: fakeContactsFactory,
      $routeParams: {
        id: "1a"
      }
    });
  }));

  describe("on load", function() {

    it('The $scope.deleteContact object is initially a null object', function() {
      expect(scope.deleteContact).toBeNull();
    });

    it('$apply causes $scope.deleteContact to be not null', function() {
      scope.$apply();
      expect(scope.deleteContact).not.toBeNull();
    });

    it('$apply causes contactsData.getContactById method invocation', function() {
      scope.$apply();
      expect(fakeContactsFactory.getContactById).toHaveBeenCalled();
    });

    it('$apply causes contactsData.getContactById method invocation with correct args', function() {
      scope.$apply();
      expect(fakeContactsFactory.getContactById).toHaveBeenCalledWith("1a");
    });

    it('Check value returned by contactsData.getContactById method', function() {
      scope.$apply();
      expect(scope.deleteContact).toBe(fakeContactsDataObject);
    });

  });

  describe("on delete", function() {

    it("delete action causes contactsData.deleteContactById method invocation", function() {
      scope.$apply();
      scope.delete();
      expect(fakeContactsFactory.deleteContactById).toHaveBeenCalled();
    });

    it("delete action causes contactsData.deleteContactById method invocation with correct args", function() {
      scope.$apply();
      scope.delete();
      expect(fakeContactsFactory.deleteContactById).toHaveBeenCalledWith("1a");
    });

  });

});
