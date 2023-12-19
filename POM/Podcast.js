import Locators from '../POM/Locators.json'

class podcast {

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

    clickFrompodcast(){
        cy.get(Locators.Frompodcast).click({ force: true })
    }

    clickNext(){
        cy.get(Locators.clickNext).click({ force: true })
    }

    podcastURL(){
        cy.get(Locators.podcastURL).type('https://podcasts.apple.com/us/podcast/driving-while-awesome/id867727969', { force: true })

    }

    podcastDescription()
    {
        cy.get(Locators.podcastDescription).type('Driving While Awesome', { force: true })
    }
    
    podcastDropdown(){
        let dropDown = Locators.podcastDropdown;
                cy.get(Locators.podcastDropdown).click()
                cy.get(Locators.podcastwordcount).click()
    }

    podcastadditionalcontext(){
        cy.get(Locators.podcastAdditionalcontext).type('Additional Context', { force: true })
    }
    
    clickSubmit(){
        cy.get(Locators.clickSubmit).click()
    }
}

export default podcast;