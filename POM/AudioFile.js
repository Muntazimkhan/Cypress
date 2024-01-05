import Locators from '../POM/Locators.json'

class audioFile{

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
        cy.get('#_-Color').click({force: true})
        cy.get(Locators.OpenProject).contains("Artificial Intelligence").click({force:true})
    }

    clickCreatePost(){
        cy.get(Locators.createPost).click()
    }

    clickFromaudio(){
        cy.get(Locators.Fromaudio).click({ force: true })
    }

    clickNext(){
        cy.get(Locators.clickNext).click({ force: true })
    }
    
    audioURL()
    {
        cy.get(Locators.AudioURL).type('https://player.fm/series/30758/381599764', { force: true })
    }
    
    audioDescription(){
        cy.get(Locators.AudioDescritpion).type('Talking Cars',{ force: true })
    }

    audioDropdown(){
        let dropDown = Locators.AudioDropdown;
                cy.get(Locators.AudioDropdown).click()
                cy.get(Locators.Audiowordcount).click()
    }

    audioadditionalDescription(){
        cy.get(Locators.Audioadditionalcontext).type('Additional Context', { force: true })
    }
    
    clickSubmit(){
        cy.get(Locators.clickSubmit).click()
    }

}
export default audioFile