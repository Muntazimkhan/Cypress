import Login from "../../POM/Loginpage";
import data from '../fixtures/data.json'
const {email,password}=data
describe('login ', () =>{

    beforeEach(() =>{
        cy.visit('/');
    });

    it('Verify that the user can Login successfully with valid data', () => {
        Login.setEmail(email)
        Login.setPassword(password)
        Login.submit()
    

        });
})