import { gitHub } from "../../support/authentication.const";
import { onGitHubPage } from "../../support/GitHub";

describe("Udemy test cases", () => {
  beforeEach("Navigate to Udemy login page", () => {
    cy.visit(gitHub);
  });
  it("Login to Udemy", () => {
    onGitHubPage.verifySignInUrl();
  });

  it("Navigate to back page", () => {
    onGitHubPage.navigateToTheMainPage();
  });
});
