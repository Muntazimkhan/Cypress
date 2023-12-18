import Locators from '../POM/Locators.json'

class Keyword {

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

    clickProject()
    {
        cy.get(Locators.clickProject).click()
    }

    openProject(){
        cy.get(Locators.OpenProject).contains("Artificial Intelligence").click({force:true})
    }

    clickCreatePost(){
        cy.get(Locators.createPost).click()
    }

    clickNext(){
        cy.get(Locators.clickNext).click()
    }

    typeKeywords(){
        cy.get(Locators.typeKeyowrd).type('American History', { force: true })
    }

    typeDescription(){
        cy.get(Locators.TypeDescription).type('American History description', { force: true })
    }

    selectDropdown(){
        let dropdown = Locators.keywrodDropdown;
    cy.get(Locators.keywrodDropdown).click()
    cy.get(Locators.keywordwordcount).click()
    }
    
    clickwritePost(){
        cy.contains(Locators.clickWritepost).click()    
    }

}

export default Keyword;

