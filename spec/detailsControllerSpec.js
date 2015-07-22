'use strict';

describe("DetailsController", function() {

  var scope, fakeContactsFactory, controller, q, deferred, location, routeParams;

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
      }
    };
    spyOn(fakeContactsFactory, 'getContactById').and.callThrough();
  });

  beforeEach(inject(function($rootScope, $controller, $q) {
    scope = $rootScope.$new();
    q = $q;

    controller = $controller("DetailsController", {
      $scope: scope,
      contactsFactory: fakeContactsFactory,
      $routeParams: {
        id: "1a"
      }
    });
  }));

  it('The $scope.contact object is initially a null object', function() {
    expect(scope.contact).toBeNull();
  });

  it('$apply causes $scope.contact to be not null', function() {
    scope.$apply();
    expect(scope.contact).not.toBeNull();
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
    expect(scope.contact).toBe(fakeContactsDataObject);
  });

});
