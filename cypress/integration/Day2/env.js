var data = require("../../fixtures");

if (Url.include("stag")) {
  cy.fixture("staging.json").then((data) => {
    data.username();
    data.password();
    data.url();
  });
} else if (Url.include("uat")) {
  cy.fixture("uat.json").then((data) => {});
} else if (Url.include("prod")) {
  cy.fixture("uat.json").then((data) => {});
}
