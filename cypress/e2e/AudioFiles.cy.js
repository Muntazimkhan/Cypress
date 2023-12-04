/// <reference types="cypress" />

describe('Create post from Audio File ', () => {
    beforeEach(() =>{
        cy.visit('/login');
    })

    it('Verify that the user is able to create a post from Audio File', () => {
        cy.get('[id="email"]').type('1t.aamer@gmail.com');
        
        cy.get('[id="password"]').type('!Test123*');

        cy.get('[class="submit"]').click();

        cy.contains('a', 'Projects').click()

        cy.get('#project_6986').contains('Artificial Intelligence').click({ force: true })

        cy.get('.project-content-btn.cs-secondary-btn').click({ force: true })

        cy.get('.from-file').click({ force: true })

        cy.get('.cs-secondary-btn.next-content').click()

        cy.get('input#content-from-custom-url').type('https://player.fm/series/30758/381599764')

        cy.get('input#new-audio-keyword').type('Talking Cars')

        cy.get('textarea#new-audio-url-context').type('Additional Context')


        // cy.contains('Write Post Now').click()
        
    });

})