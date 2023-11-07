/// <reference types="cypress" />

describe("actions spec", () => {
  it("acts", () => {
    cy.visit("/login");

    // .type() to send characters into input field
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");

    // .click() to tap at an element
    cy.get("button[type=submit]").click();
    cy.url().should("contain", "/secure");
    cy.get("a[href='/logout']").click();

    // .focus() to get inside the input field
    // .blur() should be used to get out
    cy.get("#username").focus().wait(4000).blur().wait(4000);

    // .submit() to render form data to the server
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get("#login").submit();
    cy.contains("You logged into a secure area!").should("exist");
  });

  it("checks", () => {
    cy.visit("/checkboxes");

    cy.get("[type=checkbox]").eq(0).should("not.be.checked");
    cy.get("[type=checkbox]").eq(1).should("be.checked");

    // .check() to turn on
    cy.get("[type=checkbox]").eq(0).check().should("be.checked");
    cy.get("[type=checkbox]").eq(1).check().should("be.checked");

    // .uncheck() to turn off
    cy.get("[type=checkbox]").eq(0).uncheck().should("not.be.checked");

    cy.get("[type=checkbox]").eq(0).uncheck().should("not.be.checked");
    cy.get("[type=checkbox]").eq(1).uncheck().should("not.be.checked");

    // .click() to revert the state
    cy.get("[type=checkbox]")
      .eq(0)
      .wait(4000)
      .click()
      .should("be.checked")
      .wait(4000)
      .click()
      .should("not.be.checked")
      .wait(4000);
  });

  it("selects", () => {
    cy.visit("/dropdown");

    cy.get("#dropdown").should("be.visible");
    cy.get("option")
      .eq(0)
      .should("contain.text", "Please select an option")
      .wait(4000);

    // .select() by text, value, or index
    // .select() can only be called on a <select>
    cy.get("#dropdown").select("Option 1");
    cy.get("option")
      .eq(1)
      .should("have.attr", "selected", "selected")
      .wait(4000);

    cy.get("#dropdown").select("2");
    cy.get("option")
      .eq(2)
      .should("have.attr", "selected", "selected")
      .wait(4000);

    cy.get("#dropdown").select(1);
    cy.get("option")
      .eq(1)
      .should("have.attr", "selected", "selected")
      .wait(4000);

    cy.get("option").eq(0).should("be.disabled").wait(4000);
  });
});
