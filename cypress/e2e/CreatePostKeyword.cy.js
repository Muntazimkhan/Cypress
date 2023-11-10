/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Create Project ", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Verify that the user is able to create a project", () => {

    cy.get('[id="email"]').type("1t.aamer@gmail.com");
    
    cy.get('[id="password"]').type("!Test123*");

    cy.get('[class="submit"]').click();

    cy.contains("a", "Projects").click();

    cy.get("#project_6986")
      .contains("Artificial Intelligence")
      .click({ force: true });

    cy.get(".project-content-btn.cs-secondary-btn").click({ force: true });

    cy.get(".cs-secondary-btn.next-content").click();

    cy.get("#new-keyword").type("American History");

    cy.get("#new-keyword-context").type("American History description");

    //  cy.contains('Customize Brief').click()

    // cy.contains('Write Post Now').click()
  });
});
