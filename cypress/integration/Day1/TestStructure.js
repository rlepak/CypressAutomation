///<reference types='cypress'/>

describe("First test Structure", () => {
  beforeEach("Before method", () => {
    cy.log("test");
  });
  before("Before Test", () => {
    cy.log("test");
  });
  it("First test case", () => {});
  it("Second test case", () => {});
  it("Third test case", () => {});
});
