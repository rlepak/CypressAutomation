///<reference types='cypress'/>

describe("File upload", () => {
  it("Png file upload", () => {
    cy.visit("http://practice.cybertekschool.com/upload");
    cy.get("#file-upload").attachFile("image.png");
    cy.get("[class='button']").click();

    cy.get("#uploaded-files").invoke("text", "image.png").should("be.visible");

    cy.get("#uploaded-files")
      .invoke("attr", "class")
      .should("eq", "panel text-center");

    cy.get("h3")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).equal("File Uploaded!");
      });

    cy.get("#uploaded-files")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).equal("image.png");
      });
  });
});
