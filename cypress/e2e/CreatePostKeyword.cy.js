/// <reference types="cypress" />

describe("Create post from Keyword ", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Verify that the user is able to create a post from Keyword", () => {
    
    cy.get('[id="email"]').type('1t.aamer@gmail.com')
    cy.get('[id="password"]').type('!Test123*')
    cy.get('[class="submit"]').click()
    cy.get('.filter-area.mb-5').should('be.visible')
    cy.contains('a', 'Projects').click()
    cy.get("#project_6986").contains("Artificial Intelligence").click({ force: true })
    cy.get('.project-content-btn .cs-secondary-btn ').click({ force: true })
    cy.get('.cs-secondary-btn.next-content').click()
    cy.get("#new-keyword").type('American History')
    cy.get("#new-keyword-context").type('American History description')
    let dropdown = "#from-keyword-section div div:nth-child(4)";
    cy.get(dropdown).click()
    cy.get("ul#select2-new-keyword-word-count-results li:nth-child(3)").click()
    cy.contains('Customize Brief').click()
    // cy.contains('Write Post Now').click()


  
  });

});
