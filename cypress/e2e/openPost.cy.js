describe('Open created Post ', () => {
    beforeEach(() =>{
        cy.visit('/login');
    })

    it('Verify that the user is able to open created post', () => {
       
        cy.get('#email').type('1t.aamer@gmail.com')
        cy.get('#password').type('!Test123*')
        cy.get('.submit').click()
        cy.get('.list-unstyled.components.mb-5 li:nth-child(2)').click()
        cy.get('#_-Color').click({force: true})
        cy.get('#project_6986').contains('Artificial Intelligence').click({force: true})
        cy.get('#_-Color').click({force: true})
        cy.wait(3000)
        cy.xpath("(//a[@data-grid='edit'])[2]").click({force: true})
        cy.wait(4000)
    });

})