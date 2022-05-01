///<reference types='cypress'/>

describe("Check box testing", () => {
  // beforeEach("Before method", () => {
  //   cy.log("test");
  // });
  // before("Before Test", () => {
  //   cy.log("test");
  // });
  it("First test case", () => {
    cy.visit("http://practice.cybertekschool.com/checkboxes");

    cy.get("[type='checkbox'][name='checkbox1']").click().should("be.checked");

    cy.get("[type='checkbox'][name='checkbox2']")
      .click()
      .should("not.be.checked");

    cy.get("[class='checktext']")
      .eq(0)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).equal("Checkbox 1");
      });

    cy.get("[class='checktext']")
      .eq(1)
      .invoke("text")
      .then((text) => {
        expect(text.trim()).equal("Checkbox 2");
      });
  });
});
