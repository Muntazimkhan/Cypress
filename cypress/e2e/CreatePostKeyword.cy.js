/// <reference types="cypress" />
import Keyword from "../../PageObjects/Keyword";
describe("Create post from Keyword ", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Verify that the user is able to create a post from Keyword", () => {
    
    const ln = new Keyword();

    ln.setEmail();
    ln.setPassword();
    ln.clickLogin();
    ln.clickProject();
    ln.clickOpenProject();
    // ln.clickWritepost();
    cy.get('.project-content-btn .cs-secondary-btn ').click({ force: true })
    ln.clickNext();
    ln.setKeyword();
    ln.setKeywordContext();
    ln.clickDropdown();
    // ln.clickCustombrief();
    // ln.clickWritepost();

  
  });

});
