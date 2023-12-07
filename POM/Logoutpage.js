import Locators from '../POM/Locators.json'

class Logout{

    setEmail() 
    {

        cy.get(Locators.emailField).type('1t.aamer@gmail.com')
    }

    setPassword() 
    {

        cy.get(Locators.passowrdField).type('!Test123*')
    }

    submit() 
    {
        cy.get(Locators.clickLoginButton).click()
    }

    clickDropdown() 
    {
        cy.get(Locators.clickDropdown).click()

    }

    clickLogout()
    {
        cy.xpath(Locators.clickLogoutButton).click()
    }

}

export default Logout;