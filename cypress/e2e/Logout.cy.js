import Logout from "../../POM/Logoutpage";

const LogoutPage = new Logout();
describe('Logout ', () => {
    beforeEach(() =>{
        cy.visit('/');
    })

    it('Verify that the user is able to logout', () => {
        
        LogoutPage.setEmail()
        LogoutPage.setPassword()
        LogoutPage.submit()
        LogoutPage.clickDropdown()
        LogoutPage.clickLogout()


        
    });

})