///<reference types='cypress'/>
import { modelSUrl } from "../support/authentication.const";
let data = require("../fixtures/modelsPage.json");
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
}

export const onModelSPage = new ModelS();
