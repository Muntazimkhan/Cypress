import Login from "../../PageObjects/Login";

describe('login ', () =>{

    beforeEach(() =>{
        cy.visit('/login');
    });

    it('Verify that the user can Login successfully with valid data', () => {
        
        const ln=new Login();
        ln.setEmail('1t.aamer@gmail.com');
        ln.setPassword('!Test123*');
        ln.clickLogin();
        ln.Verify();

        });
})