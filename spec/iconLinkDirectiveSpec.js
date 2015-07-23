"use strict";

describe("iconLink Directive", function() {

  var el;
  var scope;

  beforeEach(module("addressBookApp"));
  beforeEach(module("templates/directives/iconLink.html"));

  beforeEach(inject(function($compile, $rootScope) {
    scope = $rootScope;
    scope.href = "larry";
    scope.src = "curly";
    scope.alt = "moe";

    el = angular.element('<icon-link href="larry" src="curly" alt="moe" />');
    $compile(el)(scope);
    scope.$digest();
    //console.log("iconLink is rendering as: " + el[0].outerHTML);
  }));

  it("should bind the data", function() {
    expect(el[0].outerHTML).toContain("href=\"larry\"");
    expect(el[0].outerHTML).toContain("src=\"curly\"");
    expect(el[0].outerHTML).toContain("alt=\"moe\"");
    expect(el[0].outerHTML).toContain("title=\"moe\"");
  });

});
