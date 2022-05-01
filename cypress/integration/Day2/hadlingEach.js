let username;
let password;

let data = require("../../fixtures/staging.json");
describe("Handling each function", () => {
  before(function () {
    cy.visit(data.Url);
    cy.get('[style="color:red; font-weight:bold; z-index:100;"]').then(
      (btn) => {
        let generalSplit = btn
          .text()
          .replace(")", "")
          .split("|")
          .join(":")
          .split(":");
        cy.log(generalSplit);
        username = generalSplit[1].trim();
        password = generalSplit[3].trim();
        cy.log(username);
        cy.log(password);

        cy.get("#divUsername > .form-hint").type(username);
        cy.get("#txtPassword").type(password);
        cy.get("#btnLogin").click();
      }
    );
    // cy.get("#divUsername > .form-hint").type("Admin");
    // cy.get("#txtPassword").type("admin123");
    // cy.get("#btnLogin").click();
  });
  let arrayOfIndex = [];
  it("Test Vikovoyage", () => {
    cy.get(".quickLinkText").each((elements, index) => {
      arrayOfIndex.push(elements.text());
      const text = elements.text();
      expect(text).to.equal(data.quickLaunch[index]);
      cy.log(arrayOfIndex[index]);
    });
  });
});
