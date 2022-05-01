let data = require("../../fixtures/states.json");
describe("Dropdown testing", () => {
  //   it("Drop down test", () => {
  //     cy.visit("http://practice.cybertekschool.com/dropdown");

  //     cy.get("[id=state] > option").each((el, index, list) => {
  //       //   if (index != 0) {
  //       //     expect(data.states[index - 1]).equal(el.text());
  //       //   }
  //       cy.get("[id=state]").select(el.text()).should("be.visible");
  //     });
  //   });

  it("Drop down test", () => {
    cy.visit("http://practice.cybertekschool.com/dropdown");

    cy.get("#year").select("1990");
    cy.get("#month").select("July");
    cy.get("#day").select("26");
  });
});
