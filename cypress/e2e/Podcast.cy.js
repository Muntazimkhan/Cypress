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

        cy.get('.from-podcast').click({ force: true })

        cy.get('.cs-secondary-btn.next-content').click()

        cy.get('input#content-from-podcast-url').type('https://podcasts.apple.com/us/podcast/driving-while-awesome/id867727969')

        cy.get('input#new-itunes-keyword').type('Driving While Awesome')

        cy.get('textarea#new-itunes-url-context').type('Additional Context')


        // cy.contains('Write Post Now').click()
        
    });

})