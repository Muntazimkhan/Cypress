import Locators from '../POM/Locators.json'

class Aidetector {
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

    // clickAIdetector(){
    //     cy.get(Locators.ClickAID).click({ force: true })
    // }

    typeURL(){
        cy.get(Locators.TypeaiURL).type('contentatscale.ai/', { force: true })
    }

    clickFetchURL(){
        cy.get(Locators.clickfetchURL).click( { force: true })
    }

    checkAIcontent(){
        cy.get(Locators.checkAIcontent).click({ force: true })
    }

    rewriteAllaisentences(){
        cy.get(Locators.rewriteAIcontent).click({ force: true })
    }
}

export default Aidetector;