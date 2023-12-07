import Locators from '../POM/Locators.json'

class Login {

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
}
export default Login;