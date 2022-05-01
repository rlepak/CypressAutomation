///<reference types='cypress'/>
import { loginErrorMessage } from "../../support/authentication.const";

describe("Login Page Smoke", () => {
  it("Wrong password right username negative test", () => {
    cy.loginNegativePasswordScenario();

    cy.get(".phl > :nth-child(1)")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).equal(loginErrorMessage);
      });
  });

  it("Wrong username right password negative test", () => {
    cy.loginNegativeUsernameScenario();

    cy.get(".phl > :nth-child(1)")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).equal(loginErrorMessage);
      });
  });

  it("Wrong username and password negative test", () => {
    cy.loginNegativeUsernameAndPasswordScenario();

    cy.get(".phl > :nth-child(1)")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).equal(loginErrorMessage);
      });
  });
  it("No username and password negative test", () => {
    cy.loginNegativeScenarioNoUsernameAndPassword();

    cy.get(".phl > :nth-child(1)")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).equal(loginErrorMessage);
      });
  });
});
