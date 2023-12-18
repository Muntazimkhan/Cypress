import Locators from '../POM/Locators.json'

class Logout{

    setEmail(email) 
    {

        cy.get(Locators.emailField).type(email)
    }

    setPassword(password) 
    {

        cy.get(Locators.passowrdField).type(password)
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