import Locators from '../POM/Locators.json'

class Login {

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

    verifyButton(){
        cy.get(Locators.VerifyLogin).should('be.visible');

    }
}

export default new Login;