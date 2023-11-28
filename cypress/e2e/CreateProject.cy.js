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

        let TOVdropdown = ".project-fields.mx-auto div div:nth-child(6)";
        cy.get(TOVdropdown).click()
        cy.get('.select2-results__option.select2-results__option--group li:nth-child(7)').click()

        let Languagedropdown = ".project-fields.mx-auto div div:nth-child(7)";
        cy.get(Languagedropdown).click()
        cy.get('.select2-dropdown.select2-dropdown--above li:nth-child(25)').click()

        let Wordcountdropdown = ".project-fields.mx-auto div div:nth-child(8)";
        cy.get(Wordcountdropdown).click()
        cy.get('.select2-dropdown.select2-dropdown--above li:nth-child(2)').click()
        
        



        // cy.get('[type="submit"]').click()
        
        });

})