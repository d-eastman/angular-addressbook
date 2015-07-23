'use strict';

describe('addressBook app->', function() {

  it('should automatically redirect to /contacts when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toBe("/contacts");
  });

  describe('contacts view->', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should render contacts when user navigates to /contacts', function() {
      expect(element(by.css('[ng-view] div.contacts-template')).isPresent()).toBe(true);
    });

    it("should navigate to same view when user clicks 'Contacts' link", function() {
      element(by.css('ul.nav a[href$="contacts"]')).click();
      expect(browser.getLocationAbsUrl()).toBe("/contacts");
    });

    it("should navigate to newcontact view when user clicks 'New Contact' link", function() {
      element(by.css('ul.nav a[href$="newcontact"]')).click();
      expect(browser.getLocationAbsUrl()).toBe("/newcontact");
    });

    it("should navigate to about view when user clicks 'About' link", function() {
      element(by.css('ul.nav a[href$="about"]')).click();
      expect(browser.getLocationAbsUrl()).toBe("/about");
    });

    it("should navigate to details view when user clicks a contact details button", function() {
      expect(element.all(by.css("div.contactButtonGroup")).count()).toBeGreaterThan(0); //Fail the test if there are no contacts to work with
      element.all(by.css('div.contactButtonGroup a[alt="details..."]')).first().click(); //Click the first contact's details button
      expect(browser.getLocationAbsUrl()).toMatch(/contacts\//);
    });

    //and so on and so forth....

  });

  describe('newcontact view->', function() {

    beforeEach(function() {
      browser.get('#/newcontact');
    });

    it("should render the newcontact view when user navigates to /newcontact", function() {
      expect(element(by.css('[ng-view] div.new-contact-template')).isPresent()).toBe(true);
    });

    it("save button should initially be disabled", function() {
      expect(element(by.css('button[ng-click="save()"]')).getAttribute("disabled")).toMatch(/[true|disabled]/);
    });

    it("all required field validators should initially be visible", function() {
      var requiredFlags = element.all(by.css('form[name="newContactForm"] fieldset span.required'));
      expect(requiredFlags).not.toBe(undefined);
      expect(requiredFlags.count()).toBeGreaterThan(0); //Give feedback if none found - there should be at least one
      requiredFlags.each(function(element, index) {
        expect(element.getAttribute("class")).not.toContain("ng-hide");
      });
    });

    it("save button should be enabled when all required fields are populated", function() {
      element(by.css('form[name="newContactForm"] fieldset input#name')).sendKeys("test name");
      element(by.css('form[name="newContactForm"] fieldset input#phone')).sendKeys("555-555-5555");
      element(by.css('form[name="newContactForm"] fieldset input#email')).sendKeys("test@test.com");
      expect(element(by.css('button[ng-click="save()"]')).getAttribute("disabled")).toBe(null); //When enabled the disabled attribute disappears
    });

    //and so on and so forth....

  });

});
