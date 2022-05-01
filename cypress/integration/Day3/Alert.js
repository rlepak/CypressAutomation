let data = require("../../fixtures/states.json");
const { faker } = require("@faker-js/faker");
describe("JavaScript alerts Testing", () => {
  //   it("Handing JS Alert, validate text and click Ok", () => {
  //     cy.visit("http://practice.cybertekschool.com/javascript_alerts");
  //     cy.get("[class='btn btn-primary']").contains("Click for JS Alert").click();
  //     Cypress.on("uncaught:exception", (err, runnable) => {
  //       return false;
  //     });
  //     cy.on("window:alert", (str) => {
  //       expect(str).to.equal("I am a JS Alert");
  //     });

  //   // click ok on alert
  //     cy.on("window:confirm", () => true);
  //     cy.get("#result").should("have.text", "You successfully clicked an alert");
  //   });

  //   it("Handing JS Confirm - click Ok", () => {
  //     cy.visit("http://practice.cybertekschool.com/javascript_alerts");
  //     cy.get("[class='btn btn-primary']")
  //       .contains("Click for JS Confirm")
  //       .click();

  //     cy.on("window:confirm", (str) => {
  //       expect(str).to.equal("I am a JS Confirm");
  //     });
  //     // click cancel on alert
  //     cy.on("window:confirm", () => false);
  //     cy.get("#result").should("have.text", "You clicked: Cancel");
  //   });

  //   it("Handing JS Confirm - click Ok", () => {
  //     cy.visit("http://practice.cybertekschool.com/javascript_alerts");
  //     cy.get("[class='btn btn-primary']")
  //       .contains("Click for JS Confirm")
  //       .click();

  //     cy.on("window:confirm", (str) => {
  //       expect(str).to.equal("I am a JS Confirm");
  //     });
  //     // click cancel on alert
  //     cy.on("window:confirm", () => false);
  //     cy.get("#result").should("have.text", "You clicked: Cancel");
  //   });
  //

  it("Handing JS Prompt - input text in prompt and click Ok", () => {
    cy.visit("http://practice.cybertekschool.com/javascript_alerts");

    let randomText = faker.address.country();
    cy.window().then(($window) => {
      cy.stub($window, "prompt").returns(randomText);
      cy.get("[class='btn btn-primary']")
        .contains("Click for JS Prompt")
        .click();
    });
    cy.get("#result").should("have.text", "You entered: " + randomText);
  });
});
