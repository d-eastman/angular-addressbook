"use strict";

describe("viewField Directive", function() {

  var el;
  var scope;

  var fakeContactsDataObject = {
    id: "1a",
    name: "test person",
    phone: "555-555-1234",
    email: "test.person@spec.com"
  };

  beforeEach(module("addressBookApp"));
  beforeEach(module("templates/directives/viewField.html"));

  beforeEach(inject(function($compile, $rootScope) {
    scope = $rootScope;
    scope.contact = fakeContactsDataObject;
    scope.fieldName = "name";
    scope.fieldValue = scope.contact.name;

    el = angular.element('<view-field field-name="name" field-value="contact.name" />');
    $compile(el)(scope);
    scope.$digest();
    //console.log("viewField is rendering as: " + el[0].outerHTML);
  }));

  it("should bind the data", function() {
    expect(el.text()).toContain("name:");
    expect(el.text()).toContain("test person");
  });


});
