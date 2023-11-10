
describe('login ', () =>{

    beforeEach(() =>{
        cy.visit('https://stagging.contentatscale.ai/login');
    });

    it('Verify that the user can Login successfully with valid data', () => {
        cy.get('[id="email"]').type('1t.aamer@gmail.com');
        
        cy.get('[id="password"]').type('!Test123*');

        cy.get('[class="submit"]').click();

        //Assertion

        cy.get('.filter-area.mb-5').should('be.visible')

        });

    it('Verify that the user can Login successfully with invalid data', () => {
        cy.get('[id="email"]').type('1t.a amer@gmail.com');
    
        cy.get('[id="password"]').type('!Test123');

        cy.get('[class="submit"]').click();
    });
   
})