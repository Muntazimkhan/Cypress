// <reference types="cypress" />

describe('Create Project ', () => {
    beforeEach(() =>{
        cy.visit('https://stagging.contentatscale.ai/login');
    })

    it('Verify that the user is able to create a project', () => {
        cy.get('[id="email"]').type('1t.aamer@gmail.com');
        
        cy.get('[id="password"]').type('!Test123*');

        cy.get('[class="submit"]').click();

        cy.get('.drop-down.user-option').click()

        let dropDown = '.dropdown-menu.dropdown-menu-right.pb-0.show  ';
        cy.get(dropDown);

        cy.contains('Logout').click()

        cy.get('.field-area.login-area').should('contain.text', 'Welcome Back!')
        
    });

})