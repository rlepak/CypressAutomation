///<reference types='cypress'/>
import { compareUrl, modelSUrl } from "../support/authentication.const";
let data = require("../fixtures/modelsPage.json");
let comparePage = require("../fixtures/comparePage.json");
export class ModelS {
  urlVerification() {
    cy.contains("Model S").click({ force: true });
    cy.url().should("eq", modelSUrl);
  }

  privacyVerification() {
    cy.scrollTo("bottomLeft");
    cy.get("[class='tds-link tcl-link']").each((el, index) => {
      expect(data.ModelS[index]).equal(el.text());
    });
  }

  modelSComparePage() {
    cy.contains("Compare").click();
    cy.url().should("eq", compareUrl);
    cy.scrollTo("bottomLeft");
    let indexForExpectedData = 0;
    cy.get("[class='tds-text--caption tcl-compare-models__item-title']").each(
      (el, index, list) => {
        if (index % 2 == 0) {
          expect(comparePage.items[indexForExpectedData]).equal(el.text());
          indexForExpectedData++;
        } else {
          expect(comparePage.items[indexForExpectedData - 1]).equal(el.text());
        }
      }
    );
  }
}

export const onModelSPage = new ModelS();
