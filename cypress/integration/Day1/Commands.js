///<reference types='cypress'/>

cy.visit("open url");

cy.visit("url", { timeout: 10000 });

//should is promise
cy.url().should("include", "test");

//finding the element
cy.get(locator).click();
cy.get(locator).should("be.visible");
cy.get(locator).should("be.exist");

//negative ones
cy.get(locator).should("not.be.visible");
cy.get(locator).should("not.be.exist");

cy.get("h1").should("have.length", 3);
cy.get("h1").should("have.text", "test");
cy.get("h1").should("have.value", "cypress");

//parent to child
cy.get(locator).first();
cy.get(locator).last();
cy.get(locator).eq(0).click(); //taking index

cy.go("back");

cy.get(locator).nextAll.click({ multiple: true }); //will click one by one all elements

cy.get(locator).prev().click();
cy.get(locator).prevAll().click();

cy.get(locator).trigger("mouseover").click(); //hover over
cy.get(locator).trigger("mouseup").click(); //click on top of webelement

cy.get("#username").clear().type("username");
