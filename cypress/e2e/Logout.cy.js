// <reference types="cypress" />
import Logout from "../../PageObjects/Logout";

describe('Logout ', () => {
    beforeEach(() =>{
        cy.visit('/login');
    })

    it('Verify that the user is able to logout', () => {
        
        const ln = new Logout();
        ln.setEmail('1t.aamer@gmail.com');
        ln.setPassword('!Test123*');
        ln.clickLogin();
        ln.clickDropdown();
        ln.clickLogout();
        ln.Verify();
        
    });

})