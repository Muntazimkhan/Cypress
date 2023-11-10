/// <reference types="cypress" />

describe('Create Project ', () => {
    beforeEach(() =>{
        cy.visit('https://stagging.contentatscale.ai/login');
    })

    it('Verify that the user is able to create a project', () => {
        cy.get('[id="email"]').type('1t.aamer@gmail.com');
        
        cy.get('[id="password"]').type('!Test123*');

        cy.get('[class="submit"]').click();

        cy.contains('a', 'Projects').click()

        cy.get('#project_6986').contains('Artificial Intelligence').click({ force: true })

        cy.get('.project-content-btn.cs-secondary-btn').click({ force: true })

        cy.get('.from-blog').click()

        cy.get('.cs-secondary-btn.next-content').click()

        cy.get('#content-from-blog-url').type('https://blog.hubspot.com/marketing/how-to-start-a-blog')

        cy.get('input#new-blog-url-keyword').type('Description')

        cy.get('textarea#new-blog-post-context').type('Additional Context Description')

     // cy.contains('Write Post Now').click()
        
    });

})