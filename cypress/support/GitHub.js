import { gitHubLoginPage } from "./authentication.const";
export class gitHub {
  verifySignInUrl() {
    cy.contains("Sign up").click();
    cy.contains("Sign in").click();
    cy.url().should("contains", gitHubLoginPage);
  }

  navigateToTheMainPage() {
    cy.go("back");
  }
}

export const onGitHubPage = new gitHub();
