///<reference types='cypress'/>

describe("First test Structure", () => {
  it("First test case", () => {
    //by tag
    cy.get("input");

    //by ID
    cy.get("#radio1");

    //by class name
    cy.get(".icheck-helper");

    //by class name with index
    cy.get(".icheck-helper").eq(0);

    //by attribute name
    cy.get("[type]");

    //by attribute name and value
    cy.get("[name='abuse']");

    // by class value
    cy.get("class=iCheck-helper");

    //by tag name and attribute with value
    cy.get("input [name='abuse']");

    //by two different attribute or more
    cy.get("[name='abuse']class=iCheck-helper");
  });
});
