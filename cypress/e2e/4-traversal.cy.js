/// <reference types="cypress" />

describe("traversal spec", () => {
  it("traverses elements", () => {
    cy.visit("/tables");

    // .first() gets the first element of the kind
    cy.get("td").first().should("have.text", "Smith");

    // .last() gets the last element of the kind
    cy.get("td")
      .last()
      .should("contain.text", "edit")
      .and("contain.text", "delete");

      // .next() gets the next element
    cy.contains("Jason").next().should("have.text", "jdoe@hotmail.com");

    // .prev() gets the previous element
    cy.contains("Jason").prev().should("have.text", "Doe");

    // .not() exlcudes undesired elements
    cy.get("td").not(":contains(Smith)").first().should("have.text", "John");

    // .eq() gets the element by index
    cy.get("td").eq(6).should("have.text", "Bach");
  });
});
