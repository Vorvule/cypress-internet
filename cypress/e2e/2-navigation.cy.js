/// <reference types="cypress" />

describe("navigation spec", () => {
  it("goes and reloads", () => {
    cy.visit("/status_codes");
    cy.wait(6000);

    cy.visit("/status_codes/200");
    cy.url().should("include", "status_codes/200");
    cy.wait(6000);

    cy.go("back");
    cy.wait(6000);

    cy.go("forward");
    cy.wait(6000);

    cy.go(-1);
    cy.wait(6000);
    cy.go(1);
    cy.wait(6000);

    cy.reload();
    cy.wait(6000);
  });
});
