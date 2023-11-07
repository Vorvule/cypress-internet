/// <reference types="cypress" />

describe("location spec", () => {
  it("selects elements", () => {
    cy.visit("/login");

    // cy.get() locates element(s) by CSS selectors
    cy.get("h2").should("have.text", "Login Page");
    cy.get("#content").should("have.class", "large-12");
    cy.get(".example").should("be.visible");

    // cy.get() acquires all elements of the kind
    cy.get("div").should("have.length.gt", 3);
    cy.get(':contains("Password")').should("have.length.at.least", 2);

    // cy.contains() locates an element by text
    cy.contains("This is where").should("include.text", "Enter");

    // cy.contains() gets the first element only
    cy.contains("Password")
      .should("have.length", 1)
      .and("not.have.attr", "for");

    // .within() limits the location scope
    cy.get(".example").within(() => {
      cy.get("div").should("have.length", 4);
    });

    // cy.root() gets the entire document
    cy.root().should("match", "html");
  });
});
