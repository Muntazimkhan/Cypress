import Logout from "../../POM/Logoutpage";
import data from '../fixtures/data.json'

const {email,password}=data


const LogoutPage = new Logout();
describe('Logout ', () => {
    beforeEach(() =>{
        cy.visit('/');
    })

    it('Verify that the user is able to logout', () => {
        
        LogoutPage.setEmail(email)
        LogoutPage.setPassword(password)
        LogoutPage.submit()
        LogoutPage.clickDropdown()
        LogoutPage.clickLogout()
        LogoutPage.verifyLogout()


        
    });

})