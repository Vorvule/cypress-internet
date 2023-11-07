/// <reference types="cypress" />

const url = "https://the-internet.herokuapp.com/";
const baseUrl = Cypress.config().baseUrl;

describe("basic spec", () => {
  it("visits URL", () => {
    cy.visit(url);

    cy.url().should("eq", url);

    cy.title().should('eq', 'The Internet')
  });

  it("uses base URL", () => {
    cy.visit("/")

    cy.url().should("eq", baseUrl);

    cy.title().should('eq', 'The Internet')
  })
});
