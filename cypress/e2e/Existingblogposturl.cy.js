/// <reference types="cypress" />

describe('Create post from Blog post URL ', () => {
    beforeEach(() =>{
        cy.visit('/login');
    })

    it('Verify that the user is able to create a post from blog post URL', () => {
       
        cy.get('[id="email"]').type('1t.aamer@gmail.com')
        cy.get('[id="password"]').type('!Test123*')
        cy.get('[class="submit"]').click()
        cy.get('.filter-area.mb-5').should('be.visible')
        cy.contains('a', 'Projects').click()
        cy.get("#project_6986").contains("Artificial Intelligence").click({ force: true })
        cy.get('.project-content-btn .cs-secondary-btn ').click({ force: true })
        cy.get('.from-blog').click()
        cy.get('#content-from-blog-url').type('https://blog.hubspot.com/marketing/how-to-start-a-blog')
        cy.get('input#new-blog-url-keyword').type('Description')
        let dropdown = "div#from-blog-section div div div:nth-child(3)";
        cy.get(dropdown).click();
        cy.get('.select2-dropdown.select2-dropdown--below li:nth-child(4)').click()
        cy.get('textarea#new-blog-post-context').type('Additional Context Description')
        // cy.contains('Write Post Now').click()



    });

})