import { teslaUrl } from "../../support/authentication.const";
import { onModelSPage } from "../../support/ModelS";
describe("Tesla.com automation testing", () => {
  beforeEach("Navigate to page to tesla.com", () => {
    // cy.visit(teslaUrl);
    cy.visit("https://www.tesla.com/models");
  });

  it("Test One", () => {
    onModelSPage.urlVerification();
    onModelSPage.privacyVerification();
  });
});
