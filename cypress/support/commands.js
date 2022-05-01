import {
  username,
  password,
  wrongUsername,
  wrongPassword,
  url,
} from "../support/authentication.const";

Cypress.Commands.add("loginPositiveScenario", () => {
  cy.visit(url);
  cy.get("#email").clear().type(username);
  cy.get("#pass").clear().type(password);
  cy.get("[[data-testid='royal_login_button']").click();
});

Cypress.Commands.add("loginNegativePasswordScenario", () => {
  cy.visit(url);
  cy.get("#email").clear().type(username);
  cy.get("#pass").clear().type(wrongPassword);
  cy.get("[data-testid='royal_login_button']").click();
});

Cypress.Commands.add("loginNegativeUsernameScenario", () => {
  cy.visit(url);
  cy.get("#email").clear().type(wrongUsername);
  cy.get("#pass").clear().type(password);
  cy.get("[data-testid='royal_login_button']").click();
});

Cypress.Commands.add("loginNegativeUsernameAndPasswordScenario", () => {
  cy.visit(url);
  cy.get("#email").clear().type(wrongUsername);
  cy.get("#pass").clear().type(wrongPassword);
  cy.get("[data-testid='royal_login_button']").click();
});

Cypress.Commands.add("loginNegativeScenarioNoUsernameAndPassword", () => {
  cy.visit(url);
  cy.get("#email").clear();
  cy.get("#pass").clear();
  cy.get("[data-testid='royal_login_button']").click();
});
