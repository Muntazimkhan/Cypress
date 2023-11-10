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

        cy.get('.from-youtube').click({ force: true })

        cy.get('.cs-secondary-btn.next-content').click()

        cy.get('input#content-from-youtube-url').type('https://youtu.be/N8p7tmoHZ1k?si=mlD02Xh4jEvMp-ns')

        cy.get('input#new-youtube-keyword').type('Youtube Video Description')

        cy.get('textarea#new-youtube-url-context').type('Additional Youtube Video context')


     // cy.contains('Write Post Now').click()
        
    });

})