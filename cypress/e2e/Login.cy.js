import Login from "../../POM/Loginpage";
const LoginPage = new Login()

describe('login ', () =>{

    beforeEach(() =>{
        cy.visit('/');
    });

    it('Verify that the user can Login successfully with valid data', () => {
        LoginPage.setEmail()
        LoginPage.setPassword()
        LoginPage.submit()
    

        });
})