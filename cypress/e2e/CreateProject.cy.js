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
        
        cy.get('.cs-secondary-btn.create-project').click({ force: true });
        
        cy.get('#project-name').type('Automation Project')

        cy.get('#project-url').type('www.ibm.com/topics/automation')

        cy.get('#project-context').type('In general usage.')

        cy.get('#monthly-post-count').type(5)

        cy.get('#target-audience').type('Students')
        cy.get("#select2-tone-of-voice-container").as('dropdwon')
        cy.get('@dropdwon').click()
        cy.contains("Witty").click({ force: true })
        // cy.get('[type="submit"]').click()
        
        });

})