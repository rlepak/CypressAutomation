///<reference types='cypress'/>

import { URL } from "../../support/authentication";

describe("Radio box testing", () => {
  it("First test case", () => {
    cy.visit(URL);

    cy.get("[type='radio']").then((radioButtons) => {
      cy.wrap(radioButtons).first().check();

      for (let i = 0; i < radioButtons.length; i++) {
        cy.get("[class='form-check-label']")
          .eq(i)
          .invoke("text")
          .then((text) => {
            expect(text).equal("eer");
          });

        cy.wrap(radioButtons).eq(i).check({ force: true });
      }
    });
  });
});
