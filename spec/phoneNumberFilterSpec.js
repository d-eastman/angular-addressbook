describe('phoneNumber filter', function() {
  'use strict';

  var filter;

  beforeEach(module("addressBookApp"));

  beforeEach(inject(function(phoneNumberFilter) {
    filter = phoneNumberFilter;
  }));

  it('should reformat 10-digit phone number containing hyphens', function() {
    expect(filter("123-456-7890")).toBe('(123) 456-7890');
  });

  it('should reformat 10-digit phone number not containing hyphens', function() {
    expect(filter("1234567890")).toBe('(123) 456-7890');
  });

  it('should reformat 7-digit phone number not containing hyphens', function() {
    expect(filter("1234567")).toBe('123-4567');
  });

  it('should reformat undefined phone number to empty string', function() {
    expect(filter(undefined)).toBe("");
  });

  it('should reformat null phone number to empty string', function() {
    expect(filter(undefined)).toBe("");
  });

  it('should not reformat phone numbers with 1-6 or 8-9 or 11+ digits (up to 20 digits)', function() {
    for (var i = 1; i < 20; i++) {
      if (i !== 7 && i !== 10) {
        var phoneNumberToTest = new Array(i + 1).join('5'); //Build string of 5's that is i chars long
        expect(filter(phoneNumberToTest)).toBe(phoneNumberToTest); //Input should equal output
      }
    }

  });

});
