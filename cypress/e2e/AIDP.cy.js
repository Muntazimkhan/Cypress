/// <reference types="cypress" />

describe('Create fetch data from link ', () => {
    beforeEach(() =>{
        cy.visit('/login');
    })

    it('Verify that the user is able to fetch data from a link', () => {
        cy.get('[id="email"]').type('1t.aamer@gmail.com');
        
        cy.get('[id="password"]').type('!Test123*');

        cy.get('[class="submit"]').click();

        cy.contains('a', 'AI Detector').click({ force: true })

        cy.get('input#fetch_url_input').type('contentatscale.ai/', { force: true })


        cy.get('button#fetch_url_button').click( { force: true }) 
        
        //Check for AI-Content 
        cy.wait(3000);

        cy.get('button#check_ai_button').click()

        //Rewrite All AI Sentences
        cy.wait(3000);
        cy.get('button#button#rewrite_all_sentences').click()

    });

})